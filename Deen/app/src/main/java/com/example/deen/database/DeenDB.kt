package com.example.deen.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase

@Database(entities = [Tasks::class],version = 1, exportSchema = false)
abstract class DeenDB : RoomDatabase() {
    abstract fun taskDao(): TasksDao

    companion object {
        private var INSTANCE: com.example.deen.database.DeenDB? = null

        fun getInstance(context: Context): com.example.deen.database.DeenDB?{
            if (INSTANCE == null){
                synchronized(DeenDB::class){
                    INSTANCE = Room.databaseBuilder(context.applicationContext, DeenDB::class.java, "deen.db").build()
                }
            }
            return INSTANCE
        }

        fun destroyInstance(){
            INSTANCE == null
        }

    }
}