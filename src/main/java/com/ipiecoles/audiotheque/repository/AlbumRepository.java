package com.ipiecoles.audiotheque.repository;

import com.ipiecoles.audiotheque.model.Album;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlbumRepository extends JpaRepository<Album, Long> {
}
