package com.example.deen

import android.content.Intent
import android.os.Bundle

import androidx.appcompat.app.AppCompatActivity
import com.example.deen.database.DeenDB
import com.example.deen.database.Tasks
import kotlinx.android.synthetic.main.activity_create_new_task.*
import kotlinx.android.synthetic.main.content_create_new_task.*
import org.jetbrains.anko.doAsync

class CreateNewTask : AppCompatActivity() {

    private var database:DeenDB? = null


    override fun onCreate(savedInstanceState: Bundle?) {

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_create_new_task)
        setSupportActionBar(toolbar)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)

        database = DeenDB.getInstance(this)

        val tasks = Tasks("")

        createNewTask.setOnClickListener {
            val input = newTaskName.text.toString()
            tasks.taskName = input
                insertTasktoDB(tasks)
            startActivity(Intent(this, MainActivity::class.java))
        }
    }

    private fun  insertTasktoDB(tasks: Tasks){
        doAsync {
            database?.taskDao()?.insertTask(tasks)
        }
    }

    override fun onDestroy() {
        DeenDB.destroyInstance()
        super.onDestroy()
    }
}
