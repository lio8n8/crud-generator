const utils = require('../../utils');
const filenames = require('../../data/java/filenames');

module.exports = ({className, packageName, name, entityName, entityIdType}) => {
    let descriptiveName = utils.convertToPhrase(name);
    let urlSingular = utils.toSnakeCase(name).toUpperCase();
    let urlPlural = urlSingular + 'S';

return `package ${packageName}.${filenames.controller.subdir};

import ${packageName}.${filenames.dto.subdir}.${filenames.dto.name};
import ${packageName}.${filenames.dto.subdir}.${filenames.requestDto.name};
import ${packageName}.${filenames.iService.subdir}.${filenames.iService.name};
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

import static ${packageName}.Urls.${urlSingular};
import static ${packageName}.Urls.${urlPlural};
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.NO_CONTENT;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * Implements {@link ${filenames.iService.name}}
 */
@RestController
@Api(tags = "${utils.toKebabCase(name)}s-controller")
public class ${className} implements ${filenames.iController.name} {

    /**
     * ${filenames.iService.name}.
     */
    private final ${filenames.iService.name} ${filenames.iService.instance};

    /**
     * Conversion service.
     */
    private final ConversionService conversionService;

    public ${className}(final ${filenames.iService.name} ${filenames.iService.instance},
                              final ConversionService conversionService) {
        this.${filenames.iService.instance} = ${filenames.iService.instance};
        this.conversionService = conversionService;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @GetMapping(path = ${urlSingular})
    @ApiOperation(value = "Find ${descriptiveName} by id.", produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<${filenames.dto.name}> findById(@PathVariable("id") final ${entityIdType} id) {

        return new ResponseEntity<>(conversionService.convert(
            ${filenames.iService.instance}.findById(id), ${filenames.dto.name}.class
        ), OK);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @GetMapping(path = ${urlPlural})
    @ApiOperation(value = "Find all ${descriptiveName}s.")
    public ResponseEntity<Page<${filenames.dto.name}>> findAll(
            @PageableDefault(page = 0, size = 25)
            final Pageable request) {

        return new ResponseEntity<>(${filenames.iService.instance}e.findAll(request).map(
                ${name[0]} -> ${filenames.iService.instance}.convert(${name[0]}, ${filenames.dto.name}.class)
        ), OK);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @PostMapping(path = ${urlPlural},
            produces = APPLICATION_JSON_VALUE,
            consumes = APPLICATION_JSON_VALUE)
    @ApiOperation("Create a new ${descriptiveName}.")
    public ResponseEntity<${filenames.dto.name}> create(
            @Valid @RequestBody final ${filenames.requestDto.name} request) {

        return new ResponseEntity<>(conversionService.convert(
            ${filenames.iService.instance}.create(request), ${filenames.dto.name}.class
        ), CREATED);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @PutMapping(path = ${urlSingular},
            produces = APPLICATION_JSON_VALUE,
            consumes = APPLICATION_JSON_VALUE)
    @ApiOperation("Update ${descriptiveName}.")
    public ResponseEntity<${filenames.dto.name}> update(
            @PathVariable("id") final ${entityIdType} id,
            @Valid @RequestBody final ${filenames.requestDto.name} request) {

        return new ResponseEntity<>(conversionService.convert(
            ${filenames.iService.instance}.update(id, request), ${filenames.dto.name}.class
        ), OK);
    }

    /**
     * {@inheritDoc}
     */
    @Override
    @DeleteMapping(path = ${urlSingular})
    @ApiOperation("Delete ${descriptiveName} by id.")
    public ResponseEntity deleteById(@PathVariable("id") final ${entityIdType} id) {
        ${filenames.iService.instance}.deleteById(id);

        return new ResponseEntity(NO_CONTENT);
    }
}
`};
