import React from 'react'
import CloudSuccess from './CloudSuccess'
import Expert from './Expert'
import Work from './Work'
import InnerBanner from '../../../Component/InnerBanner'
import Seo from '../../../Seocomponent/Seo'

const DataMigration = () => {
    return (
        <>
            <Seo title="Data Migration Services | Secure Cloud & System Migration - Ramot" description="Safely migrate your business data to modern platforms with our secure and efficient data migration services." keywords="data migration services, cloud migration, data transfer, secure data migration, IT migration services" />
            <InnerBanner title="Data Migration" />
            <Work />
            <Expert />
            <CloudSuccess />
        </>
    )
}

export default DataMigration

