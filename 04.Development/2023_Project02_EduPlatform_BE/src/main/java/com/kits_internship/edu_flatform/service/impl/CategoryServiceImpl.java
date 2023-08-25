package com.kits_internship.edu_flatform.service.impl;

import com.kits_internship.edu_flatform.config.DateConfig;
import com.kits_internship.edu_flatform.entity.CategoryEntity;
import com.kits_internship.edu_flatform.entity.RoleName;
import com.kits_internship.edu_flatform.exception.NotFoundException;
import com.kits_internship.edu_flatform.exception.UnauthorizedException;
import com.kits_internship.edu_flatform.model.base.ListResponseModel;
import com.kits_internship.edu_flatform.model.base.MetadataResponse;
import com.kits_internship.edu_flatform.model.request.CategoryFilterRequest;
import com.kits_internship.edu_flatform.model.request.CategoryRequest;
import com.kits_internship.edu_flatform.model.response.CategoryResponse;
import com.kits_internship.edu_flatform.repository.CategoryRepository;
import com.kits_internship.edu_flatform.security.UserPrinciple;
import com.kits_internship.edu_flatform.service.CategoryService;
import com.kits_internship.edu_flatform.service.TeacherService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl extends BaseServiceImpl<CategoryEntity, CategoryRepository> implements CategoryService {
    public CategoryServiceImpl(CategoryRepository jpaRepository) {
        super(jpaRepository);
    }

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    TeacherService teacherService;
    @Autowired
    DateConfig dateConfig;

    @Override
    public CategoryResponse addByCurrentUser(CategoryRequest request, Optional<UserPrinciple> user) {
        if (!user.get().getAuthorities().stream().findAny().get().getAuthority().equals(String.valueOf(RoleName.ROLE_ADMIN))) {
            throw new UnauthorizedException();
        }
        CategoryEntity categoryEntity = modelMapper.map(request, CategoryEntity.class);
        categoryEntity = create(categoryEntity);

        return modelMapper.map(categoryEntity, CategoryResponse.class);
    }

    @Override
    public CategoryResponse updateByCurrentUser(Long id, CategoryRequest request, Optional<UserPrinciple> user) {
        if (!user.get().getAuthorities().stream().findAny().get().getAuthority().equals(String.valueOf(RoleName.ROLE_ADMIN)) || user.get().getTeacherID() == null) {
            throw new UnauthorizedException();
        }
        Optional<CategoryEntity> optionalCategory = findCategoryId(id);
        if (optionalCategory.isEmpty()) {
            errors.put("category", "Not found category");
            throw new NotFoundException(errors);
        }
        CategoryEntity categoryEntity = modelMapper.map(request, CategoryEntity.class);
        categoryEntity.setId(optionalCategory.get().getId());
        categoryEntity.setModifiedDate(dateConfig.getTimestamp());
        jpaRepository.save(categoryEntity);

        return modelMapper.map(categoryEntity, CategoryResponse.class);
    }

    @Override
    public ListResponseModel filterByCurrentUser(CategoryFilterRequest categoryFilter, Optional<UserPrinciple> user) {
        Page<CategoryEntity> categoryEntities = jpaRepository.filter(
                categoryFilter.getKeyword(),
                categoryFilter.getStatus(),
                PageRequest.of(categoryFilter.getPage() - 1, categoryFilter.getLimit(), Sort.by(Sort.Order.desc("createdDate"))));

        ListResponseModel responses = new ListResponseModel();
        List<CategoryResponse> responseList = categoryEntities.stream().map(categoryEntity -> modelMapper.map(categoryEntity, CategoryResponse.class)).collect(Collectors.toList());
        responses.setResults(responseList);

        MetadataResponse metadata = new MetadataResponse(
                categoryEntities.getTotalElements(),
                categoryFilter.getPage(),
                categoryFilter.getLimit()
        );
        responses.setMetadata(metadata);
        return responses;
    }

    @Override
    public Optional<CategoryEntity> findCategoryId(Long id) {
        return jpaRepository.findById(id);
    }

}
