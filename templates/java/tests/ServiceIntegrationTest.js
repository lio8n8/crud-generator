const utils = require('../../../utils');
const filenames = require('../../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) => {
    let descriptiveName = utils.convertToPhrase(name);
    let nameCapitalized = utils.capitalize(name);

return `package ${packageName}

import ${packageName}.BaseServiceIntegrationTest
import ${packageName}.${filenames.iRepository.subdir}.${filenames.iRepository.name}
import ${packageName}.${filenames.iService.subdir}.${filenames.iService.name}
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest

import static ${packageName}.Utils.getCreate${nameCapitalized}Request

/**
 * Integrations tests for ${descriptiveName}s service.
 */
class ${className} extends BaseServiceIntegrationTest {

    @Autowired
    ${filenames.iService.name} ${filenames.iService.instance}

    def setup() {

    }

    def cleanup() {

    }

    def 'find ${descriptiveName} by id'() {
        given: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        when: 'find ${descriptiveName} by id'
        def res = ${filenames.iService.instance}.findById(${name}.id)

        then: '${descriptiveName} returned'
        with(res) {
            id == ${name}.id
        }
    }

    def 'find all ${descriptiveName}s'() {
        given: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        when: 'find all ${descriptiveName}s'
        def res = ${filenames.iService.instance}.findAll(PageRequest.of(0, 25))

        then: 'page with ${descriptiveName} returned'
        assert res.getContent().any { it.id == ${name}.id}
    }

    def 'create a new ${descriptiveName}'() {
        given: 'create ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'create ${descriptiveName}'
        def res = ${filenames.iService.instance}.create(request)

        then: '${descriptiveName} created'
        with(res) {
            assert id
        }
    }

    def 'update ${descriptiveName}'() {
        given: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        and: 'update ${descriptiveName} request'
        def request = getCreate${nameCapitalized}Request()

        when: 'update ${descriptiveName}'
        def res = ${filenames.iService.instance}.update(${name}.id, request)

        then: '${descriptiveName} updated'
        with(res) {
            id == ${name}.id
        }
    }

    def 'delete ${descriptiveName} by id'() {
        given: '${descriptiveName} created'
        def ${name} = ${filenames.iService.instance}.create(getCreate${nameCapitalized}Request())

        when: 'delete ${descriptiveName} by id'
        ${filenames.iService.instance}.deleteById(${name}.id)

        then: '${descriptiveName} deleted'
        ${filenames.iService.instance}.findById(${name}.id).isEmpty()
    }
}
`};
