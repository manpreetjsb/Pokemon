export interface IpokemonCommen {
  name: string
  url: string
}
export interface IAbilityBody {
  is_hidden: boolean
  ability: IpokemonCommen
  slot: number
}
export interface ITypeBody {
  slot: number
  type: IpokemonCommen
}
export interface IStatBody {
  base_stat: number
  effort: number
  stat: IpokemonCommen
}
export interface IVersionGroupDetails {
  level_learned_at: number
  move_learn_method: IpokemonCommen
  version_group: IpokemonCommen
}
export interface IMovesBody {
  move: IpokemonCommen
  version_group_details: IVersionGroupDetails[]
}
export interface ISprites {
  back_default: string
}
export interface IPokemonDetail {
  abilities: IAbilityBody[]
  name: string
  order: number
  sprites: ISprites
  types: ITypeBody[]
  stats: IStatBody[]
  species: IpokemonCommen
  moves: IMovesBody[]
}
