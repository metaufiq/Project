package com.example.deen

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.example.deen.database.DeenDB
import com.example.deen.database.Tasks
import kotlinx.android.synthetic.main.list_layout.view.*
import org.jetbrains.anko.doAsync
import org.jetbrains.anko.uiThread

class AdapterTaskList(var taskList: ArrayList<Tasks>) : RecyclerView.Adapter<AdapterTaskList.ViewHolder>() {
    private var deenDB:DeenDB? = null

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView){
        val taskN = itemView.taskname
        val check = itemView.checkBox
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.list_layout, parent, false)
        deenDB = DeenDB.getInstance(parent.context!!)
        return ViewHolder(v)
    }

    override fun getItemCount(): Int {
        return taskList.size
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val task: Tasks = taskList[position]
        holder.taskN?.text = task.taskName

        holder.check.setOnClickListener {
            deleteTask(holder)
        }
    }



    private fun deleteTask (holder:ViewHolder){
        doAsync {
            val  convertedTaskN = holder.taskN.toString()
            deenDB?.taskDao()?.deleteATask(convertedTaskN)
            uiThread {
            }
        }
        taskList.removeAt(holder.adapterPosition)
        notifyItemRemoved(holder.adapterPosition)
        notifyItemRangeChanged(holder.adapterPosition, taskList.size)
    }
}