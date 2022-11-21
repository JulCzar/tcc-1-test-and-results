package com.test.myapplication

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import br.com.rafael.jpdroid.core.Jpdroid
import com.test.myapplication.entity.Content
import com.test.myapplication.entity.Test
import com.test.myapplication.entity.TestResult
import com.test.myapplication.scripts.TestGetItem
import com.test.myapplication.scripts.TestSetGetItem
import com.test.myapplication.scripts.TestSetItem
import java.util.*

var TAG = "TestApp"

class MainActivity: AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var testSizes = mutableListOf<Int>(1_000, 2_500, 5_000, 10_000, 25_000, 50_000)

        var database = Jpdroid.getInstance()
        database.context = this
        database.addEntity(Content::class.java)
        database.open()

        var testGetItem = TestGetItem()
        var testSetItem = TestSetItem()
        var testSetGetItem = TestSetGetItem()

        var getResult = mutableListOf<String>()
        var setResult = mutableListOf<String>()
        var setGetResult = mutableListOf<String>()

        for (i in testSizes) {
            var result = testRunner(testSetItem, "testSetItem", i)

            setResult.add("$result")
        }
        for (i in testSizes) {
            var result = testRunner(testGetItem, "testGetItem", i)

            getResult.add("$result")
        }
        for (i in testSizes) {
            var result = testRunner(testSetGetItem, "testSetGetItem", i)

            setGetResult.add("$result")
        }

        Log.i(TAG, "$TAG $getResult")
        Log.i(TAG, "$TAG $setResult")
        Log.i(TAG, "$TAG $setGetResult")
    }
}

fun testRunner(test: Test, testName: String, times: Int): TestResult {
    var start = Date().time.toDouble()

    for (i in 0 until 10) {
        Log.i(TAG, "times $times")
        for (j in 0..times) test.execute();
    }


    var end = Date().time.toDouble()
    var duration = end-start
    var averageTime = duration / 10;

    var result = TestResult()

    result.name = testName
    result.time = averageTime
    result.times = times

    Log.i(TAG, "$TAG $testName run $result");

    return result;
}