packege com.crm.crm.model;

import java.util.Collection;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RepositoryRestResource
@RequestMapping("api")
@CrossOrigin(origins="http://localhost:3000")

class ContactsController {
private ContactRepository contactRepository;

public ContactsController(ContactRepository contactRepository) {
    this.contactRepository = contactRepository;
}
@GetMapping("/contacts")
Conllection<Contact> contacts () {
    return (Collection<Contact>) contactRepository.findAll();
}
@PostMapping('/contacts')
ResponseEntity<Contact> createContact(@valid @RequestBody Contact contact) throws URISyntaxException {
    Contact result = contactRepository.save(contact);
    return ResponseEntity.ok().body(result)
}

}