import React from 'react'
import { omitBy, isUndefined } from 'lodash'
import useQueryParams from './useQueryParams'


const useQueryConfig = () => {
    const queryParams = useQueryParams()
    const queryConfig = omitBy(
        {
            start: queryParams.start,
            end: queryParams.end,
        },
        isUndefined
    )
    return queryConfig
}

export default useQueryConfig
