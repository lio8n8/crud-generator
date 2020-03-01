const EXT = require('../extensions');
const SUBDIRECTORIES = require('../subdirectories');
const utils = require('../../utils');
const info = require('../../input/info');

const capitalizedName = utils.capitalize(info.name);

module.exports = {
    model: {
        name: capitalizedName,
        subdir: SUBDIRECTORIES.MODELS,
        ext: EXT.java
    },
    dto: {
        name: `${capitalizedName}DTO`,
        subdir: SUBDIRECTORIES.DTO,
        ext: EXT.java
    },
    requestDto: {
        name: `${capitalizedName}RequestDTO`,
        subdir: SUBDIRECTORIES.DTO,
        ext: EXT.java
    },
    converter: {
        name: `${capitalizedName}DTOCoverter`,
        subdir: SUBDIRECTORIES.CONVERTERS,
        ext: EXT.java
    },
    iRepository: {
        name: `I${capitalizedName}sRepository`,
        subdir: SUBDIRECTORIES.REPOSITORIES,
        ext: EXT.java,
        instance: `${info.name}sRepository`
    },
    iService: {
        name: `I${capitalizedName}sService`,
        subdir: SUBDIRECTORIES.SERVICES,
        ext: EXT.java,
        instance: `${info.name}sService`
    },
    service: {
        name: `${capitalizedName}sService`,
        subdir: SUBDIRECTORIES.SERVICES,
        ext: EXT.java,
        instance: `${info.name}sService`
    },
    iController: {
        name: `I${capitalizedName}sController`,
        subdir: SUBDIRECTORIES.CONTROLLERS,
        ext: EXT.java,
        instance: `${info.name}sController`
    },
    controller: {
        name: `${capitalizedName}sController`,
        subdir: SUBDIRECTORIES.CONTROLLERS,
        ext: EXT.java,
        instance: `${info.name}sController`
    },
    migration: {
        name: `${utils.getFormattedDate()}-${utils.toKebabCase(info.name)}-table`,
        subdir: SUBDIRECTORIES.MIGRATIONS,
        ext: EXT.xml,
        instance: null
    }
};
