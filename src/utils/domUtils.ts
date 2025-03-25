export function handleEscKeyDown(
  e: React.KeyboardEvent,
  handleClose: () => void,
  focusId?: string
) {
  if (e.key === 'Escape') {
    e.stopPropagation()
    handleClose()

    setTimeout(() => {
      if (focusId) {
        focusElementById(focusId)
      }
    }, 0)
  }
}

export function focusElementById(id: string) {
  const element = document.getElementById(id) as HTMLAnchorElement | null
  if (element) {
    element.focus()
  }
}
