package com.test.myapplication.entity

import br.com.rafael.jpdroid.annotations.Column
import br.com.rafael.jpdroid.annotations.Entity
import br.com.rafael.jpdroid.annotations.PrimaryKey
import java.io.Serializable


@Entity
class Content: Serializable {
    private val serialVersionUID = 1L

    @PrimaryKey
    @Column
    val _id: Long = 1L
    var data: String

    constructor(data: String) {
        this.data = data
    }
}