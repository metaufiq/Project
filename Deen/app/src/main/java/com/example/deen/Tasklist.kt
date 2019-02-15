package com.example.deen


import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.deen.database.DeenDB
import com.example.deen.database.Tasks
import kotlinx.android.synthetic.main.fragment_tasklist.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.uiThread



class Tasklist : androidx.fragment.app.Fragment() {

    private var deenDB: DeenDB? =null



    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_tasklist, container, false)
    }


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        deenDB = DeenDB.getInstance(context!!)

        loadTask()
        addnewtask.setOnClickListener {
            createTask()
        }
    }

    private fun loadTask(){
        doAsync {
            val data = deenDB?.taskDao()?.getAllTask()
            uiThread {
                if (data == null || data.isEmpty()){
                    tasks.text = resources.getString(R.string.no_task_found)
                }
                else{
                    tasks.text = ""
                    viewTasks(data)
                }
            }
        }

    }

    private fun createTask() {
        startActivity(Intent(activity, CreateNewTask::class.java))
    }

    private fun viewTasks(data: List<Tasks>){
        var convertedData:ArrayList<Tasks> = ArrayList()
        convertedData.addAll(data)
        recyclerview.layoutManager = LinearLayoutManager(context)
        recyclerview.adapter = AdapterTaskList(convertedData)
    }

    override fun onDestroy() {
        DeenDB.destroyInstance()
        super.onDestroy()
    }

}
