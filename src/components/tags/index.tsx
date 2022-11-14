import React, { ReactNode } from 'react'
import { TagsStyles } from './styles'

interface TagsProps {
    tags: Array<string>,
}

type TagProp = {
    children: ReactNode
}

const TagItem = ({ children }: TagProp) => <span>{children}</span>

export function Tags({ tags }: TagsProps) {
    return (
        <TagsStyles>
            {tags.map((item, index) => <TagItem key={index}>{item}</TagItem>)}
        </TagsStyles>
    )
}