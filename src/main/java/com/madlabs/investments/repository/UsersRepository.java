package com.madlabs.investments.repository;

/**
 *
 * @author deepak
 */
import com.madlabs.investments.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends MongoRepository<User, String> {

}
