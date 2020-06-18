import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import * as Style from "./styled"

const Pagination = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage
}) => (
        <Style.PaginationWrapper>
            {!isFirst && <Link to={prevPage} >Página anterior</Link>}
            <p>{currentPage} de {numPages}</p>
            {!isLast && <Link to={nextPage} >Próxima página</Link>}
        </Style.PaginationWrapper>
    )

Pagination.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
}

export default Pagination