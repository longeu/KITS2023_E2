package com.kits_internship.edu_flatform.security;

import com.kits_internship.edu_flatform.entity.RoleName;
import com.kits_internship.edu_flatform.entity.StudentEntity;
import com.kits_internship.edu_flatform.entity.TeacherEntity;
import com.kits_internship.edu_flatform.entity.UserEntity;
import com.kits_internship.edu_flatform.exception.NotFoundException;
import com.kits_internship.edu_flatform.exception.UnprocessableEntityException;
import com.kits_internship.edu_flatform.repository.StudentRepository;
import com.kits_internship.edu_flatform.repository.TeacherRepository;
import com.kits_internship.edu_flatform.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserEntity> userEntity = userRepository.findByUsername(username);
        if (userEntity.isEmpty()) {
            throw new NotFoundException("User not found " + username);
        }
        Set<String> roles = new HashSet<>();
        roles.add(String.valueOf(userEntity.get().getRole()));

        Long studentID = null;
        Long teacherID = null;
        Map<String, Object> errors = new HashMap<>();
        try {
            if (userEntity.get().getRole().equals(RoleName.ROLE_STUDENT)) {
                Optional<StudentEntity> studentEntity = studentRepository.findByUserID(userEntity.get().getId());
                studentID = studentEntity.orElseThrow().getId();
            }
            if (userEntity.get().getRole().equals(RoleName.ROLE_TEACHER)) {
                Optional<TeacherEntity> teacherEntity = teacherRepository.findByUserID(userEntity.get().getId());
                teacherID = teacherEntity.orElseThrow().getId();
            }
            return UserPrinciple.build(userEntity.get(), roles, studentID, teacherID);
        } catch (Exception e) {
            errors.put("user", e.getMessage());
            throw new UnprocessableEntityException(errors);
        }

    }
}