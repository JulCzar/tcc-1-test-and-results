package com.test.myapplication.scripts

import br.com.rafael.jpdroid.core.Jpdroid
import com.test.myapplication.entity.Content
import com.test.myapplication.entity.Test
import java.lang.Exception

class TestSetGetItem: Test() {
    override fun execute() {
        var database = Jpdroid.getInstance()

        var value = "bar"
        database.persist(Content(value))
        var valueGet = database.retrieve(Content::class.java, "_id = ${1L}");
        var first: Content?

        try {
            first = valueGet.first()
        } catch (e: Exception) {
            first = Content("not-bar")
        }

        if (first != null) {
            if (first.equals(value)) {

            }
        }
    }
}