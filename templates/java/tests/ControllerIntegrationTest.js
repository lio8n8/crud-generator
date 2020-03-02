const utils = require('../../../utils');
const filenames = require('../../../data/java/filenames');

module.exports = ({className, packageName, name}) => {
    let descriptiveName = utils.convertToPhrase(name);
    let nameCapitalized = utils.capitalize(name);
    let urlSingular = utils.toSnakeCase(name).toUpperCase();
    let urlPlural = urlSingular + 'S';
    let token = '${token}';

return `package ${packageName}

import ${packageName}.BaseControllerIntegrationTest
import ${packageName}.${filenames.dto.subdir}.${filenames.dto.name}
import ${packageName}.${filenames.iService.subdir}.${filenames.iService.name}
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.reactive.function.BodyInserters

import java.time.LocalDateTime

import static ${packageName}.Urls.${urlSingular}
import static ${packageName}.Urls.${urlPlural}
import static ${packageName}.Utils.getCreate${nameCapitalized}Request
import static org.springframework.http.HttpHeaders.AUTHORIZATION
import static org.springframework.http.MediaType.APPLICATION_JSON

/**
 * Integration tests for ${descriptiveName} controller.
 */
class ${className} extends BaseControllerIntegrationTest {

    @Autowired
    ${filenames.iService.name} ${filenames.iService.instance}

    def sutup() {

    }

    def cleanup() {

    }

    def 'find ${descriptiveName} by id'() {
        // TODO: Get token
        given: 'token'
        def token = null

        and: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        when: 'find ${descriptiveName} by id'
        webTestClient.get()
                .uri(${urlSingular}, ${name}.id)
                .contentType(APPLICATION_JSON)
                .accept(APPLICATION_JSON)
                .header(AUTHORIZATION, "Bearer ${token}")
                .exchange()
                .expectStatus()
                .isOk()
                .expectBody(${filenames.dto.name})
                .consumeWith({ x ->
                    assert x.responseBody.id == ${name}.id
                })

        then: 'success'
        true
    }

    def 'find all ${descriptiveName}s'() {
        // TODO: Get token
        given: 'token'
        def token = null

        and: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())


        when: 'find all ${descriptiveName}s'
        webTestClient.get()
                .uri(${urlPlural})
                .contentType(APPLICATION_JSON)
                .accept(APPLICATION_JSON)
                .header(AUTHORIZATION, "Bearer ${token}")
                .exchange()
                .expectStatus()
                .isOk()

        then: 'success'
        true
    }

    def 'create ${descriptiveName}'() {
        // TODO: Get token
        given: 'token'
        def token = null

        and: 'create ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'create ${descriptiveName}'
        webTestClient.post()
                .uri(${urlPlural})
                .contentType(APPLICATION_JSON)
                .accept(APPLICATION_JSON)
                .header(AUTHORIZATION, "Bearer ${token}")
                .body(BodyInserters.fromValue(request))
                .exchange()
                .expectStatus()
                .isCreated()
                .expectBody(${filenames.dto.name})
                .consumeWith({ x ->
                    assert x.responseBody.id
                })

        then: 'success'
        true
    }

    def 'update ${descriptiveName}'() {
        // TODO: Get token
        given: 'token'
        def token = null

        and: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        and: 'update ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'update ${descriptiveName}'
        webTestClient.put()
                .uri(${urlSingular}, ${name}.id)
                .contentType(APPLICATION_JSON)
                .accept(APPLICATION_JSON)
                .body(BodyInserters.fromValue(request))
                .header(AUTHORIZATION, "Bearer ${token}")
                .exchange()
                .expectStatus()
                .isOk()
                .expectBody(${filenames.dto.name})
                .consumeWith({ x ->
                    assert x.responseBody.id == ${name}.id
                })

        then: 'success'
        true
    }

    def 'delete ${descriptiveName} by id'() {
        // TODO: Get token
        given: 'token'
        def token = null

        and: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        when: 'delete ${descriptiveName}'
        webTestClient.delete()
                .uri(${urlSingular}, ${name}.id)
                .header(AUTHORIZATION, "Bearer ${token}")
                .exchange()
                .expectStatus()
                .isNoContent()

        then: 'success'
        true
    }
}
`};
