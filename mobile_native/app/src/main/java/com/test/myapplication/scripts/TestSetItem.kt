package com.test.myapplication.scripts

import br.com.rafael.jpdroid.core.Jpdroid
import com.test.myapplication.entity.Content
import com.test.myapplication.entity.Test

class TestSetItem: Test() {
    override fun execute() {
        var database = Jpdroid.getInstance()

        database.persist(Content("bar"))
    }
}