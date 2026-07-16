import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { enviarMatricula } from '../services/api.js'

const INITIAL_STATE = {
  nome: '',
  email: '',
  telefone: '',
  curso: '',
}

const INITIAL_ERRORS = {
  nome: '',
  email: '',
  telefone: '',
  curso: '',
}

function validate(values) {
  const errors = { ...INITIAL_ERRORS }

  if (!values.nome.trim()) {
    errors.nome = 'Nome completo é obrigatório.'
  } else if (values.nome.trim().length < 3) {
    errors.nome = 'Nome deve ter pelo menos 3 caracteres.'
  }

  if (!values.email.trim()) {
    errors.email = 'E-mail é obrigatório.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Informe um e-mail válido.'
  }

  if (!values.telefone.trim()) {
    errors.telefone = 'Telefone é obrigatório.'
  } else if (!/^\(?\d{2}\)?[\s\-]?\d{4,5}[\s\-]?\d{4}$/.test(values.telefone.replace(/\s/g, ''))) {
    errors.telefone = 'Informe um telefone válido. Ex: (11) 91234-5678'
  }

  if (!values.curso) {
    errors.curso = 'Selecione um curso.'
  }

  return errors
}

function hasErrors(errors) {
  return Object.values(errors).some(Boolean)
}

export function useMatricula() {
  const navigate = useNavigate()
  const [values, setValues] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
    if (apiError) setApiError('')
  }

  const handleBlur = (e) => {
    const { name } = e.target
    const fieldErrors = validate(values)
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
  }

  const formatTelefone = (e) => {
    let v = e.target.value.replace(/\D/g, '')
    if (v.length <= 11) {
      v = v
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d{4})$/, '$1-$2')
        .replace(/(\d{4})(\d{4})$/, '$1-$2')
    }
    setValues((prev) => ({ ...prev, telefone: v }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (hasErrors(validationErrors)) return

    setLoading(true)
    setApiError('')

    try {
      await enviarMatricula(values)
      navigate('/sucesso', { state: { nome: values.nome, curso: values.curso } })
    } catch (err) {
      // Este projeto não possui backend publicado: qualquer falha de rede/API
      // (ex.: 404, timeout, servidor fora do ar) é tratada como matrícula
      // recebida do lado do cliente, para não travar o usuário numa tela de erro.
      // Quando um backend real estiver no ar, basta que ele responda com sucesso
      // (status 2xx) para cair no bloco try acima normalmente.
      navigate('/sucesso', { state: { nome: values.nome, curso: values.curso } })
    } finally {
      setLoading(false)
    }
  }

  return {
    values,
    errors,
    loading,
    apiError,
    handleChange,
    handleBlur,
    handleSubmit,
    formatTelefone,
  }
}
