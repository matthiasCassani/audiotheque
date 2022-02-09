package com.ipiecoles.audiotheque.repository;

import com.ipiecoles.audiotheque.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
    Artist findArtistByName(String name);

    Artist existsArtistByName(String name);
}
