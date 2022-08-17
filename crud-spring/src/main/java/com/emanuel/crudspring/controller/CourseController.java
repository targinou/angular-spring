package com.emanuel.crudspring.controller;

import com.emanuel.crudspring.model.Course;
import com.emanuel.crudspring.repository.CourseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {


    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<Course> list(){
        return courseRepository.findAll();
    }

    @PostMapping
    public void add(@RequestBody Course course){
        courseRepository.save(course);
    }
}
