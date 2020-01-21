module.exports = ({className, packageName, name, entityName, entityIdType}) =>
`package ${packageName};

public interface ${className} {
    
    /**
     * Finds ${name} by id.
     * @param id ${name} id.
     *
     * @return {@link ${entityName}DTO}.
     */
    ResponseEntity<${entityName}DTO> findById(${entityIdType} id);
    
    /**
     * Finds all ${name}s.
     *
     * @return list of {@link ${entityName}DTO}.
     */
    ResponseEntity<List<${entityName}DTO>> findAll();
    
    /**
     * Creates a new ${name}.
     * @param request create ${name} request.
     *
     * @return {@link ${entityName}DTO}.
     */
    ResponseEntity<${entityName}DTO> create(${entityName}RequestDTO request);
    
    /**
     * Updates ${name}.
     * @param id ${name} id.
     * @param request update ${name} request.
     *
     * @return updated {@link ${entityName}DTO}
     */
    ResponseEntity<${entityName}DTO> update(${entityIdType} id, ${entityName}RquestDTO request);
    
    /**
     * Deletes ${name} by id.
     * @param id ${name} id.
     */
    ResponseEntity<Void> deleteById(${entityIdType} id);
}    
`;
