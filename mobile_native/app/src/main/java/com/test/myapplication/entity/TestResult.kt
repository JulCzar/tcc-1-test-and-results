package com.test.myapplication.entity

class TestResult {
    var name: String = ""
    var time: Double = 0.0
    var times: Int = 0

    override fun toString(): String {
        return "name:$name, time:$time, times:$times\n"
    }
}