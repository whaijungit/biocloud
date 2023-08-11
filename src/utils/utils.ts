export const awit = (duration: number = 3000) => {
    return new Promise<number>(reslove => {
        setTimeout(() => {
            reslove(duration)
        }, duration);
    })
}

export const msg = (errors: any) => {
    const errs: string[] = [];
    (errors.errorFields as any[]).forEach(v => {
      errs.push(...v.errors)
    })
    return errs
  }
  