package com.example.deen.database

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class Tasks(
    var taskName: String
){
    @PrimaryKey(autoGenerate = true)
    var taskID: Long = 0

    var positionOnView: Long? = null
}
