package com.placement.smartplacementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.smartplacementportal.entity.Resume;
import com.placement.smartplacementportal.entity.Student;
import com.placement.smartplacementportal.repository.ResumeRepository;
import com.placement.smartplacementportal.repository.StudentRepository;

@Service
public class ResumeService {

    @Autowired
    private ResumeRepository resumeRepository;

    @Autowired
    private StudentRepository studentRepository;

    public List<Resume> getAllResumes() {
        return resumeRepository.findAll();
    }

    public Resume getResumeById(Long id) {
        return resumeRepository.findById(id).orElse(null);
    }

    public Resume saveResume(Resume resume) {
        return resumeRepository.save(resume);
    }

    public void deleteResume(Long id) {
        resumeRepository.deleteById(id);
    }

    public List<Resume> getResumesByStudent(Long studentId) {

        Student student = studentRepository
                .findById(studentId)
                .orElse(null);

        if (student == null) {
            return List.of();
        }

        return resumeRepository.findByStudent(student);
    }
}