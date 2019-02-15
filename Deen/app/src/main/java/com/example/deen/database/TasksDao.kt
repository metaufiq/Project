package com.example.deen.database

import androidx.room.*

@Dao
interface TasksDao {
    @Query("SELECT * from  Tasks")
    fun getAllTask(): List<Tasks>

    @Query("DELETE from Tasks Where taskName = :taskName")
    fun deleteATask(taskName: String)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertTask(tasks: Tasks)

    //@Delete
    //fun deleteTask(tasks: Tasks)
}