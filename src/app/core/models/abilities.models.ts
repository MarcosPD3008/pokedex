export interface AbilityEffectResponse {
    count: number;
    next: string;
    previous: string;
    results: AbilityEffect[];
}

export interface AbilityEffect {
    effect_changes: EffectChange[];
    effect_entries: EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    generation: NameUrlObject;
    id: number;
    is_main_series: boolean;
    name: string;
    names: Name[];
    pokemon: PokemonAbility[];
}
  
export interface EffectChange {
    effect_entries: EffectEntry[];
    version_group: NameUrlObject;
}
  
interface EffectEntry {
    effect: string;
    language: NameUrlObject;
    short_effect?: string;
}
  
interface FlavorTextEntry {
    flavor_text: string;
    language: NameUrlObject;
    version_group: NameUrlObject;
}
  
interface NameUrlObject {
    name: string;
    url: string;
}
  
interface Name {
    language: NameUrlObject;
    name: string;
}
  
interface PokemonAbility {
    is_hidden: boolean;
    pokemon: NameUrlObject;
    slot: number;
}
  