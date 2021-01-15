package com.dmall.cabinxdc.demo;

import com.dmall.sso.sdk.linker.interceptor.SSOLoginSpringInterceptor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * 作用描述 Web Mvc配置
 *
 * @author jian.dong
 * @version 1.0
 * @date 2019/9/3 - 11:02
 **/
@Slf4j
@Configuration
@EnableWebMvc
public class CustomWebMvcConfigurer implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(new SSOLoginSpringInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/ready")
                .excludePathPatterns("/health");

        registry.addInterceptor(
                new CorsInterceptor()
        ).addPathPatterns("/**");

    }
}
