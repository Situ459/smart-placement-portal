package com.placement.smartplacementportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.entity.User;

public interface StudentRepository
        extends JpaRepository<Student, Long> {

    Optional<Student> findByUser(User user);

}