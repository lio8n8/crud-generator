module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName};

/**
 * ${entityName}s service interface.
 */
public interface ${className} {

    /**
     * Finds ${name} by id.
     * @param id ${name} id.
     * @return {@link ${entityName}}.
     */
    ${entityName} findById(${entityIdType} id);

    /**
     * Finds all ${name}s.
     * @return list of {@link ${entityName}};
     */
    List<${entityName}> findAll();

    /**
     * Creates a new ${name}.
     * @param request create ${name} request.
     * @return created {@link ${entityName}}.
     */
    ${entityName} create(${entityName}RequestDTO request);

    /**
     * Updates ${name}.
     * @param id ${name} id.
     * @param request update ${name} request.
     * @return updated {@link ${entityName}}.
     */
    ${entityName} update(${entityIdType} id, ${entityName}RequestDTO request);

    /**
     * Deletes ${name} by id.
     * @param id ${name} id.
     */
    void deleteById(${entityIdType} id);
}
`;
