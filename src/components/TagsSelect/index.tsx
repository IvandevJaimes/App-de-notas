import { useContext } from 'react'
import CreatableSelect from 'react-select/creatable'
import Select from 'react-select'
import { ThemeContext } from '../../context/ThemeContext';
import { NotesContext, NotesContextType } from '../../context/NotesContext';
import { MultiValue } from 'react-select';
import { Tag } from '../../App';

type TagsSelectProps = {
  isCreatable?: boolean
  selectedTags: Tag[]
  setSelectedTags: (tags: Tag[]) => void
}

export const TagsSelect = ({ isCreatable = false, selectedTags, setSelectedTags }: TagsSelectProps) => {
  const { theme } = useContext(ThemeContext);
  const {
    tags: availableTags,
    handleTagCreate: onTagCreate
  } = useContext(NotesContext) as NotesContextType;

  const handleTagsSelect = (tags: MultiValue<{label: string, value: string}>) => {
    setSelectedTags(tags.map(tag => ({
      id: tag.value,
      label: tag.label
    })))
  }

  const handleTagCreate = (label: string) => {
    const newTag: Tag = {
      id: new Date().valueOf().toString(),
      label: label
    }

    onTagCreate(newTag);
    setSelectedTags([...selectedTags, newTag]);
  }

  return isCreatable ? (
    <CreatableSelect
      isMulti
      value={selectedTags.map(tag => ({
        label: tag.label,
        value: tag.id
      }))}
      options={availableTags.map(tag => ({
        label: tag.label,
        value: tag.id
      }))}
      onChange={handleTagsSelect}
      onCreateOption={handleTagCreate}
      id='tags'
      aria-label='select tags'
      styles={{
        option: styles => ({
          ...styles,
          backgroundColor: theme.elements,
          color: theme.fontColor,
          '&:hover': {
            backgroundColor: theme.onHover
          }
        }),
        control: styles => ({
          ...styles,
          borderColor: theme.accent,
          borderRadius: 5,
          backgroundColor: theme.elements,
          border: `2px solid ${theme.accent}`,
          '&:hover': {
            borderColor: theme.accentDark
          }
        }),
        multiValue: styles => ({
          ...styles,
          backgroundColor: theme.accent
        }),
        multiValueLabel: styles => ({
          ...styles,
          color: theme.background,
          fontWeight: 500
        }),
        multiValueRemove: styles => ({
          ...styles,
          color: theme.background,
          ':hover': {
            backgroundColor: theme.accentDark,
            color: theme.background,
            cursor: 'pointer'
          }
        }),
        input: styles => ({
          ...styles,
          color: theme.fontColor
        }),
        menu: styles => ({
          ...styles,
          backgroundColor: theme.elements,
          border: `2px solid ${theme.accentLight}`
        })
      }}
    />
  ) : (
    <Select
      isMulti
      value={selectedTags.map(tag => ({
        label: tag.label,
        value: tag.id
      }))}
      options={availableTags.map(tag => ({
        label: tag.label,
        value: tag.id
      }))}
      onChange={handleTagsSelect}
      id='tags'
      aria-label='select-tags'
      styles={{
        option: styles => ({
          ...styles,
          backgroundColor: theme.elements,
          color: theme.fontColor,
          '&:hover': {
            backgroundColor: theme.onHover
          }
        }),
        control: styles => ({
          ...styles,
          borderColor: theme.accent,
          borderRadius: 5,
          backgroundColor: theme.elements,
          border: `2px solid ${theme.accent}`,
          '&:hover': {
            borderColor: theme.accentDark
          }
        }),
        multiValue: styles => ({
          ...styles,
          backgroundColor: theme.accent
        }),
        multiValueLabel: styles => ({
          ...styles,
          color: theme.background,
          fontWeight: 500
        }),
        multiValueRemove: styles => ({
          ...styles,
          color: theme.background,
          ':hover': {
            backgroundColor: theme.accentDark,
            color: theme.background,
            cursor: 'pointer'
          }
        }),
        input: styles => ({
          ...styles,
          color: theme.fontColor
        }),
        menu: styles => ({
          ...styles,
          backgroundColor: theme.elements,
          border: `2px solid ${theme.accentLight}`
        })
      }}
    />
  )
}