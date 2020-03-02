const utils = require('../../../utils');
const filenames = require('../../../data/java/filenames');

module.exports = ({className, packageName, name}) => {
    let descriptiveName = utils.convertToPhrase(name);
    let nameCapitalized = utils.capitalize(name);

return `package ${packageName}

import ${packageName}.${filenames.iRepository.subdir}.${filenames.iRepository.name}
import ${packageName}.${filenames.service.subdir}.${filenames.service.name}
import ${packageName}.${filenames.model.subdir}.${filenames.model.name}
import org.springframework.data.domain.PageRequest
import spock.lang.Specification

import java.time.LocalDateTime

import static ${packageName}.Utils.getCreate${nameCapitalized}Request
import static ${packageName}.Utils.get${nameCapitalized}
import static ${packageName}.Utils.get${nameCapitalized}s

/**
 * Unit tests for ${descriptiveName} service.
 */
class ${className} extends Specification {
    def 'find ${descriptiveName} by id'() {
        given: '${descriptiveName}s repository mock'
        def ${filenames.iRepository.instance}Mock = Mock(${filenames.iRepository.name})

        and: '${descriptiveName} service'
        def ${filenames.service.instance} = new ${filenames.service.name}(
                ${filenames.iRepository.instance}Mock
        )

        and: '${descriptiveName}'
        def ${name} = get${nameCapitalized}()

        when: 'find ${descriptiveName} by id'
        ${filenames.service.instance}.findById(${name}.id)

        then: '${descriptiveName} returned'
        1 * ${filenames.iRepository.instance}Mock.findById(${name}.id) >> Optional.of(${name})
    }

    def 'find all ${descriptiveName}s'() {
        given: '${descriptiveName}s repository mock'
        def ${filenames.iRepository.instance}Mock = Mock(${filenames.iRepository.name})

        and: '${descriptiveName} service'
        def ${filenames.service.instance} = new ${filenames.service.name}(
                ${filenames.iRepository.instance}Mock
        )

        and: 'page request'
        def request = PageRequest.of(0, 42)

        when: 'find all ${descriptiveName}s'
        ${filenames.service.instance}.findAll(request)

        then: 'findAll method called'
        1 * ${filenames.iRepository.instance}Mock.findAll(request)
    }

    def 'create a new ${descriptiveName}'() {
        given: '${descriptiveName}s repository mock'
        def ${filenames.iRepository.instance}Mock = Mock(${filenames.iRepository.name})

        and: '${descriptiveName} service'
        def ${filenames.service.instance} = new ${filenames.service.name}(
                ${filenames.iRepository.instance}Mock
        )

        and: 'create ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'create ${descriptiveName}'
        ${filenames.service.instance}.create(request)

        then: 'save method called'
        1 * ${filenames.iRepository.instance}Mock.save(!null as ${nameCapitalized})
    }

    def 'update ${descriptiveName}'() {
        given: '${descriptiveName}s repository mock'
        def ${filenames.iRepository.instance}Mock = Mock(${filenames.iRepository.name})

        and: '${descriptiveName} service'
        def ${filenames.service.instance} = new ${filenames.service.name}(
                ${filenames.iRepository.instance}Mock
        )

        and: '${descriptiveName}'
        def ${name} = get${nameCapitalized}()

        and: 'update ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'update ${descriptiveName}'
        ${filenames.service.instance}.update(${name}.id, request)

        then: '${descriptiveName} exists'
        1 * ${filenames.iRepository.instance}Mock.findById(${name}.id) >> Optional.of(${name})

        and: 'method save called'
        1 * ${filenames.iRepository.instance}Mock.save(!null as ${nameCapitalized})
    }

    def 'delete ${descriptiveName} by id'() {
        given: '${descriptiveName}s repository mock'
        def ${filenames.iRepository.instance}Mock = Mock(${filenames.iRepository.name})

        and: '${descriptiveName} service'
        def ${filenames.service.instance} = new ${filenames.service.name}(
            ${filenames.iRepository.instance}Mock
        )

        and: '${descriptiveName} exists'
        def ${name} = get${nameCapitalized}()

        when: 'delete ${descriptiveName} by id'
        ${filenames.service.instance}.deleteById(${name}.id)

        then: 'deleteById method called'
        1 * ${filenames.iRepository.instance}Mock.deleteById(${name}.id)
    }
}
`};
