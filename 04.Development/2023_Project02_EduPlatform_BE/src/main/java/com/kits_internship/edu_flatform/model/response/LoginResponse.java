package com.kits_internship.edu_flatform.model.response;

import com.kits_internship.edu_flatform.entity.RoleName;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
    private String username;
    private String token;
    private RoleName role;
}
