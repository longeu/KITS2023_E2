package com.kits_internship.edu_flatform.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.util.*;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
@Table(name = "courses")
public class CourseEntity extends BaseEntity{
    private String name;
    private String description;
    private String objectives;
    private String target;
    private String image;
    @Enumerated(value = EnumType.STRING)
    private StatusName status;
    private BigDecimal price;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date createdDate;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy HH:mm:ss")
    private Date modifiedDate;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL,optional = false)
    @JoinColumn(name = "teacherID")
    private TeacherEntity teacher;

    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL,optional = false)
    @JoinColumn(name = "categoryID")
    private CategoryEntity category;

    @ManyToMany(mappedBy = "courses")
    private List<StudentEntity> students = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<LectureEntity> lectures = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<ReviewEntity> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<TransactionDetailEntity> transactionDetail = new ArrayList<>();

    @OneToMany(mappedBy = "course")
    private List<DiscussionEntity> discusssions = new ArrayList<>();
}
