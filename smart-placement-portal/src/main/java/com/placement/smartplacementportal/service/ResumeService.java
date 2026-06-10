package com.placement.smartplacementportal.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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

    @Value("${file.upload-dir}")
    private String uploadDir;

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

    public Resume getLatestResumeByStudent(
            Long studentId) {

        Student student = studentRepository
                .findById(studentId)
                .orElse(null);

        if (student == null) {
            return null;
        }

        return resumeRepository
                .findTopByStudentOrderByUploadedAtDesc(
                        student);
    }

    public Resume uploadResume(
            Long studentId,
            MultipartFile file)
            throws IOException {

        Student student = studentRepository
                .findById(studentId)
                .orElse(null);

        if (student == null) {
            return null;
        }

        String fileName =
                System.currentTimeMillis()
                        + "_"
                        + file.getOriginalFilename();

        File directory = new File(uploadDir);

        if (!directory.exists()) {
            directory.mkdirs();
        }

        File destination =
                new File(directory, fileName);

        file.transferTo(destination);

        Resume resume = new Resume();

        resume.setStudent(student);
        resume.setFileName(fileName);
        resume.setFilePath(destination.getAbsolutePath());
        resume.setUploadedAt(LocalDateTime.now());

        return resumeRepository.save(resume);
    }

    public ResponseEntity<Resource> downloadResume(
            Long resumeId)
            throws IOException {

        Resume resume = resumeRepository
                .findById(resumeId)
                .orElse(null);

        if (resume == null) {
            return ResponseEntity.notFound().build();
        }

        File file = new File(
                resume.getFilePath());

        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        ByteArrayResource resource =
                new ByteArrayResource(
                        Files.readAllBytes(
                                file.toPath()));

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(
                        "Content-Disposition",
                        "inline; filename=\""
                                + resume.getFileName()
                                + "\"")
                .contentLength(file.length())
                .body(resource);
    }
}