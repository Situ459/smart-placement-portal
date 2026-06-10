package com.placement.smartplacementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.smartplacementportal.dto.StudentRegistrationDTO;
import com.placement.smartplacementportal.entity.Role;
import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.entity.User;
import com.placement.smartplacementportal.repository.StudentRepository;
import com.placement.smartplacementportal.repository.UserRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student getStudentById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    public Student registerStudent(
            StudentRegistrationDTO dto) {

        User user = new User();

        user.setFullName(dto.getFullName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole(Role.STUDENT);
        user.setIsActive(true);

        User savedUser =
                userRepository.save(user);

        Student student = new Student();

        student.setUser(savedUser);
        student.setRollNo(dto.getRollNo());
        student.setBranch(dto.getBranch());
        student.setCgpa(dto.getCgpa());

        return studentRepository.save(student);
    }
}