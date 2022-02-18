import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = '--high--' | '--middle--' | '--low--'
export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {id: 1, name: 'React', priority: '--high--'},
    {id: 2, name: 'Redux', priority: '--high--'},
    {id: 3, name: 'HTML', priority: '--low--'},
    {id: 4, name: 'CSS', priority: '--low--'},
    {id: 5, name: 'JS/TS', priority: '--middle--'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === '--high--') return affairs.filter(affair => affair.priority === '--high--')
    if (filter === '--middle--') return affairs.filter(affair => affair.priority === '--middle--')
    if (filter === '--low--') return affairs.filter(affair => affair.priority === '--low--')
    else return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, id: number): Array<AffairType> => {
    return affairs.filter(affair => affair.id !== id)
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id))

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
