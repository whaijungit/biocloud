import './worker'
import { message } from 'antd'
import { useEffect, useRef, useState } from 'react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

interface IProps {
    value?: string
}

interface IEvent {
    onChange?: (e: string) => void
}

const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    fontSize: 18,
    language: 'json',
    formatOnType: true,
}

const Editor: React.FC<IProps & IEvent> = (props) => {
    const [value, setValue] = useState<string>()
    const domRef = useRef<HTMLDivElement>(null!)
    const monacoEditorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null!)
    useEffect(() => {
        initMonacoEditor()
    }, [])
    useEffect(() => {
        if (props.value) {
            monacoEditorRef.current.setValue(props.value)
            setValue(props.value)
        }
    }, [])

    const initMonacoEditor = () => {
        if (monacoEditorRef.current) {
            return
        }
        if (domRef.current) {
            monacoEditorRef.current = monaco.editor.create(domRef.current, { value: value, ...options })
            domRef.current.addEventListener('keydown', e => {
                if (e.ctrlKey && e.key === 's') {
                    e.preventDefault()
                    try {
                        const editorValue = monacoEditorRef.current.getValue()
                        JSON.parse(editorValue)
                        handleChange(editorValue)
                        message.success('保存成功', 1)
                    } catch (error) {
                        message.error('json 格式不正确', 1)
                    }
                }
            })
        }
    }

    const handleChange = (e: string) => {
        setValue(e)
        monacoEditorRef.current.setValue(e)
        if (props.onChange) {
            props.onChange(JSON.stringify(JSON.parse(e), null, 4))
        }
    }

    return (
        <div style={{ height: 800 }} ref={domRef} className='editor' id='biocloud-monaco-editor' />
    )
}

export default Editor;
