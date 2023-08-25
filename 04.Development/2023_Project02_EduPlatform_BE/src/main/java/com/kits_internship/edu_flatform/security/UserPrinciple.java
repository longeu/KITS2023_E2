package com.kits_internship.edu_flatform.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kits_internship.edu_flatform.entity.UserEntity;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class UserPrinciple implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Long id;

    private Long studentID;

    private Long teacherID;

    private String username;

    @JsonIgnore
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public UserPrinciple(Long id, String username, String password, Long studentID, Long teacherID,
                         Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.studentID = studentID;
        this.teacherID = teacherID;
        this.authorities = authorities;
    }

    public static UserPrinciple build(UserEntity entity, Set<String> roles, Long studentID, Long teacherID) {
        List<GrantedAuthority> authorities = roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());
        return new UserPrinciple(
                entity.getId(),
                entity.getUsername(),
                entity.getPassword(),
                studentID,
                teacherID,
                authorities
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        UserPrinciple user = (UserPrinciple) o;
        return Objects.equals(id, user.id);
    }
}

