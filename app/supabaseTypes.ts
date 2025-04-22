export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      Games: {
        Row: {
          court: number | null
          id: number
          round: number | null
          team_a: number | null
          team_ab_score: number | null
          team_b: number | null
          team_c: number | null
          team_cd_score: number | null
          team_d: number | null
        }
        Insert: {
          court?: number | null
          id?: number
          round?: number | null
          team_a?: number | null
          team_ab_score?: number | null
          team_b?: number | null
          team_c?: number | null
          team_cd_score?: number | null
          team_d?: number | null
        }
        Update: {
          court?: number | null
          id?: number
          round?: number | null
          team_a?: number | null
          team_ab_score?: number | null
          team_b?: number | null
          team_c?: number | null
          team_cd_score?: number | null
          team_d?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Games_team_a_fkey"
            columns: ["team_a"]
            isOneToOne: false
            referencedRelation: "Teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Games_team_b_fkey"
            columns: ["team_b"]
            isOneToOne: false
            referencedRelation: "Teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Games_team_c_fkey"
            columns: ["team_c"]
            isOneToOne: false
            referencedRelation: "Teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Games_team_d_fkey"
            columns: ["team_d"]
            isOneToOne: false
            referencedRelation: "Teams"
            referencedColumns: ["id"]
          },
        ]
      }
      Rounds: {
        Row: {
          id: number
          note: string | null
          time: string
        }
        Insert: {
          id?: number
          note?: string | null
          time: string
        }
        Update: {
          id?: number
          note?: string | null
          time?: string
        }
        Relationships: []
      }
      Teams: {
        Row: {
          id: number
          player1: string | null
          player2: string | null
        }
        Insert: {
          id?: number
          player1?: string | null
          player2?: string | null
        }
        Update: {
          id?: number
          player1?: string | null
          player2?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_games: {
        Args: Record<PropertyKey, never>
        Returns: {
          game_id: number
          round: number
          court: number
          team_ab_score: number | null
          team_cd_score: number | null
          start_time: string
          notes: string
          team_a_player1: string
          team_a_player2: string
          team_b_player1: string
          team_b_player2: string
          team_c_player1: string
          team_c_player2: string
          team_d_player1: string
          team_d_player2: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
