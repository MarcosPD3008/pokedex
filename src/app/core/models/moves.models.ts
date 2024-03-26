export interface MoveResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Move[];
  }
  
  export interface Move {
    accuracy: number | null;
    contest_combos: ContestCombos;
    contest_effect: UrlObject;
    contest_type: NameUrlObject;
    damage_class: NameUrlObject;
    effect_chance: number | null;
    effect_changes: any[]; // This could be more detailed based on the structure of effect changes
    effect_entries: EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    generation: NameUrlObject;
    id: number;
    learned_by_pokemon: NameUrlObject[];
    machines: any[]; // This could be more detailed based on the structure of machines
    meta: Meta;
    name: string;
    names: Name[];
    past_values: any[]; // This could be more detailed based on the structure of past values
    power: number | null;
    pp: number;
    priority: number;
    stat_changes: any[]; // This could be more detailed based on the structure of stat changes
    super_contest_effect: UrlObject;
    target: NameUrlObject;
    type: NameUrlObject;
  }
  
  interface ContestCombos {
    normal: ContestComboDetail;
    super: ContestComboDetail;
  }
  
  interface ContestComboDetail {
    use_after: NameUrlObject[] | null;
    use_before: NameUrlObject[] | null;
  }
  
  interface UrlObject {
    url: string;
  }
  
  interface NameUrlObject {
    name: string;
    url: string;
  }
  
  interface EffectEntry {
    effect: string;
    language: NameUrlObject;
    short_effect: string;
  }
  
  interface FlavorTextEntry {
    flavor_text: string;
    language: NameUrlObject;
    version_group: NameUrlObject;
  }
  
  interface Meta {
    ailment: NameUrlObject;
    ailment_chance: number;
    category: NameUrlObject;
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: number | null;
    max_turns: number | null;
    min_hits: number | null;
    min_turns: number | null;
    stat_chance: number;
  }
  
  interface Name {
    language: NameUrlObject;
    name: string;
  }
  