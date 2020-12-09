export const AlibiHTMLConverter = (associate) => {
  return `
      <div class="associate">
          <div class="associate__name">Name: ${ associate.name }</div>
          <div class="associate__alibi">Alibi: ${ associate.alibi }</div>
      </div>
  `
}