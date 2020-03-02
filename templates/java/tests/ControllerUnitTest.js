const utils = require('../../../utils');
const filenames = require('../../../data/java/filenames');

module.exports = ({className, packageName, name}) => {
    let descriptiveName = utils.convertToPhrase(name);
    let nameCapitalized = utils.capitalize(name);

return `package ${packageName}

import ${packageName}.${filenames.dto.subdir}.${filenames.dto.name}
import ${packageName}.${filenames.iService.subdir}.${filenames.iService.name}
import ${packageName}.${filenames.controller.subdir}.${filenames.controller.name}
import ${packageName}.${filenames.model.subdir}.${filenames.model.name}
import org.springframework.core.convert.ConversionService
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.PageRequest
import spock.lang.Specification

import static ${packageName}.Utils.getCreate${nameCapitalized}tRequest
import static ${packageName}.Utils.get${nameCapitalized}
import static ${packageName}.Utils.get${nameCapitalized}s
import static org.springframework.http.HttpStatus.CREATED
import static org.springframework.http.HttpStatus.NO_CONTENT
import static org.springframework.http.HttpStatus.OK

/**
 * Unit tests for ${descriptiveName} controller.
 */
class ${className} extends Specification {
    def 'find ${descriptiveName} by id'() {
        given: '${descriptiveName}s service mock'
        def ${filenames.iService.instance}Mock = Mock(${filenames.iService.name})

        and: 'conversion service mock'
        def conversionServiceMock = Mock(ConversionService)

        and: '${descriptiveName}s controller'
        def ${filenames.controller.instance} = new ${filenames.controller.name}(
                ${filenames.iService.instance}Mock,
                conversionServiceMock
        )

        and: '${descriptiveName}'
        def ${name} = get${nameCapitalized}()

        when: 'find ${descriptiveName} by id'
        def res = ${filenames.controller.instance}.findById(${name}.id)

        then: '${descriptiveName} returned'
        1 * ${filenames.iService.instance}Mock.findById(${name}.id) >> ${name}

        and: 'conversion service called'
        1 *  conversionServiceMock.convert(${name}, ${filenames.dto.name}) >> ${filenames.dto.name}.builder()
                .id(${name}.id)
                .build()

        and: 'response OK'
        res.statusCode == OK

        and: 'response contains body'
        res.body
    }

    def 'find all ${descriptiveName}s'() {
        given: '${descriptiveName}s service mock'
        def ${filenames.iService.instance}Mock = Mock(${filenames.iService.name})

        and: 'conversion service mock'
        def conversionServiceMock = Mock(ConversionService)

        and: '${descriptiveName}s controller'
        def ${filenames.controller.instance} = new ${filenames.controller.name}(
                ${filenames.iService.instance}Mock,
                conversionServiceMock
        )

        and: '${descriptiveName}s'
        def ${name}s = get${nameCapitalized}s()

        and: 'page'
        def page = new PageImpl<>(${name}s)

        and: 'page request'
        def request = PageRequest.of(0, 25)

        when: 'find all ${descriptiveName}s'
        def res = ${filenames.controller.instance}.findAll(request)

        then: 'page was returned'
        1 * ${filenames.iService.instance}Mock.findAll(request) >> page

        and: 'conversion service called'
        ${name}s.size() * conversionServiceMock.convert(!null as ${filenames.model.name}, ${filenames.dto.name})

        and: 'response OK'
        res.statusCode == OK

        and: 'response contains body'
        res.body
    }

    def 'create ${descriptiveName}'() {
        given: '${descriptiveName}s service mock'
        def ${filenames.iService.instance}Mock = Mock(${filenames.iService.name})

        and: 'conversion service mock'
        def conversionServiceMock = Mock(ConversionService)

        and: '${descriptiveName}s controller'
        def ${filenames.controller.instance} = new ${filenames.controller.name}(
                ${filenames.iService.instance}Mock,
                conversionServiceMock
        )

        and: '${descriptiveName}'
        def ${name} = get${nameCapitalized}()

        and: 'create ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'create ${descriptiveName}'
        def res = ${filenames.controller.instance}.create(request)

        then: '${descriptiveName} created'
        1 * ${filenames.iService.instance}Mock.create(request) >> ${name}

        and: 'conversion service called'
        1 *  conversionServiceMock.convert(${name}, ${filenames.dto.name}) >> ${filenames.dto.name}.builder()
                .id(${name}.id)
                .build()

        and: 'response status is CREATED'
        res.statusCode == CREATED

        and: 'response contains body'
        res.body
    }

    def 'update ${descriptiveName}'() {
        given: '${descriptiveName}s service mock'
        def ${filenames.iService.instance}Mock = Mock(${filenames.iService.name})

        and: 'conversion service mock'
        def conversionServiceMock = Mock(ConversionService)

        and: '${descriptiveName}s controller'
        def ${filenames.controller.instance} = new ${filenames.controller.name}(
                ${filenames.iService.instance}Mock,
                conversionServiceMock
        )

        and: '${descriptiveName}'
        def ${name} = get${nameCapitalized}()

        and: 'update ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'update ${descriptiveName}'
        def res = ${filenames.controller.instance}.update(${name}.id, request)

        then: '${descriptiveName} updated'
        1 * ${filenames.iService.instance}Mock.update(${name}.id, request) >> ${name}

        and: 'conversion service called'
        1 * conversionServiceMock.convert(${name}, ${filenames.dto.name}) >> ${filenames.dto.name}.builder()
                .id(${name}.id)
                .build()

        and: 'response status is OK'
        res.statusCode == OK

        and: 'response contains body'
        res.body
    }

    def 'delete ${descriptiveName} by id'() {
        given: '${descriptiveName}s service mock'
        def ${filenames.iService.instance}Mock = Mock(${filenames.iService.name})

        and: 'conversion service mock'
        def conversionServiceMock = Mock(ConversionService)

        and: '${descriptiveName}s controller'
        def ${filenames.controller.instance} = new ${filenames.controller.name}(
                ${filenames.iService.instance}Mock,
                conversionServiceMock
        )

        and: '${descriptiveName}'
        def ${name} = get${nameCapitalized}()

        when: 'delete ${descriptiveName} by id'
        def res = ${filenames.controller.instance}.deleteById(${name}.id)

        then: '${descriptiveName} is deleted'
        1 * ${filenames.iService.instance}Mock.deleteById(${name}.id)

        and: 'response status is NO_CONTENT'
        res.statusCode == NO_CONTENT
    }
}
`};
