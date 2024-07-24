import { AbstractParseTreeVisitor } from "antlr4ng";
import { ProgramContext } from "./DuckDBParser.js";
import { PlsqlrootContext } from "./DuckDBParser.js";
import { SingleStmtContext } from "./DuckDBParser.js";
import { StmtContext } from "./DuckDBParser.js";
import { PlsqlconsolecommandContext } from "./DuckDBParser.js";
import { CallstmtContext } from "./DuckDBParser.js";
import { CreaterolestmtContext } from "./DuckDBParser.js";
import { Opt_withContext } from "./DuckDBParser.js";
import { OptrolelistContext } from "./DuckDBParser.js";
import { AlteroptrolelistContext } from "./DuckDBParser.js";
import { AlteroptroleelemContext } from "./DuckDBParser.js";
import { CreateoptroleelemContext } from "./DuckDBParser.js";
import { CreateuserstmtContext } from "./DuckDBParser.js";
import { AlterrolestmtContext } from "./DuckDBParser.js";
import { Opt_in_databaseContext } from "./DuckDBParser.js";
import { AlterrolesetstmtContext } from "./DuckDBParser.js";
import { AlterroutinestmtContext } from "./DuckDBParser.js";
import { Alter_routine_cluaseContext } from "./DuckDBParser.js";
import { Routine_action_listContext } from "./DuckDBParser.js";
import { Routine_actionContext } from "./DuckDBParser.js";
import { CreategroupstmtContext } from "./DuckDBParser.js";
import { AltergroupstmtContext } from "./DuckDBParser.js";
import { Add_dropContext } from "./DuckDBParser.js";
import { CreateschemastmtContext } from "./DuckDBParser.js";
import { SchemaNameCreateContext } from "./DuckDBParser.js";
import { OptschemaeltlistContext } from "./DuckDBParser.js";
import { Schema_stmtContext } from "./DuckDBParser.js";
import { VariablesetstmtContext } from "./DuckDBParser.js";
import { Set_restContext } from "./DuckDBParser.js";
import { Generic_setContext } from "./DuckDBParser.js";
import { Set_rest_moreContext } from "./DuckDBParser.js";
import { Var_nameContext } from "./DuckDBParser.js";
import { Var_listContext } from "./DuckDBParser.js";
import { Var_valueContext } from "./DuckDBParser.js";
import { Iso_levelContext } from "./DuckDBParser.js";
import { Opt_boolean_or_string_columnContext } from "./DuckDBParser.js";
import { Opt_boolean_or_stringContext } from "./DuckDBParser.js";
import { Zone_valueContext } from "./DuckDBParser.js";
import { Opt_encodingContext } from "./DuckDBParser.js";
import { Nonreservedword_or_sconst_columnContext } from "./DuckDBParser.js";
import { Nonreservedword_or_sconstContext } from "./DuckDBParser.js";
import { VariableresetstmtContext } from "./DuckDBParser.js";
import { Reset_restContext } from "./DuckDBParser.js";
import { Generic_resetContext } from "./DuckDBParser.js";
import { SetresetclauseContext } from "./DuckDBParser.js";
import { FunctionsetresetclauseContext } from "./DuckDBParser.js";
import { VariableshowstmtContext } from "./DuckDBParser.js";
import { ConstraintssetstmtContext } from "./DuckDBParser.js";
import { Constraints_set_listContext } from "./DuckDBParser.js";
import { Constraints_set_modeContext } from "./DuckDBParser.js";
import { CheckpointstmtContext } from "./DuckDBParser.js";
import { DiscardstmtContext } from "./DuckDBParser.js";
import { AltertablestmtContext } from "./DuckDBParser.js";
import { Alter_table_cmdsContext } from "./DuckDBParser.js";
import { Partition_bound_specContext } from "./DuckDBParser.js";
import { Partition_bound_cluaseContext } from "./DuckDBParser.js";
import { Partition_bound_chooseContext } from "./DuckDBParser.js";
import { Partition_with_cluaseContext } from "./DuckDBParser.js";
import { Partition_cmdContext } from "./DuckDBParser.js";
import { Index_partition_cmdContext } from "./DuckDBParser.js";
import { Alter_table_cmdContext } from "./DuckDBParser.js";
import { Alter_column_defaultContext } from "./DuckDBParser.js";
import { Opt_drop_behaviorContext } from "./DuckDBParser.js";
import { Opt_collate_clauseContext } from "./DuckDBParser.js";
import { Alter_usingContext } from "./DuckDBParser.js";
import { Replica_identityContext } from "./DuckDBParser.js";
import { ReloptionsContext } from "./DuckDBParser.js";
import { Opt_reloptionsContext } from "./DuckDBParser.js";
import { Reloption_listContext } from "./DuckDBParser.js";
import { Reloption_elemContext } from "./DuckDBParser.js";
import { Alter_identity_column_option_listContext } from "./DuckDBParser.js";
import { Alter_identity_column_optionContext } from "./DuckDBParser.js";
import { PartitionboundspecContext } from "./DuckDBParser.js";
import { Hash_partbound_elemContext } from "./DuckDBParser.js";
import { Hash_partboundContext } from "./DuckDBParser.js";
import { AltercompositetypestmtContext } from "./DuckDBParser.js";
import { Alter_type_cmdsContext } from "./DuckDBParser.js";
import { Alter_type_cmdContext } from "./DuckDBParser.js";
import { CloseportalstmtContext } from "./DuckDBParser.js";
import { CopystmtContext } from "./DuckDBParser.js";
import { Copy_fromContext } from "./DuckDBParser.js";
import { Opt_programContext } from "./DuckDBParser.js";
import { Copy_file_nameContext } from "./DuckDBParser.js";
import { Copy_optionsContext } from "./DuckDBParser.js";
import { Copy_opt_listContext } from "./DuckDBParser.js";
import { Copy_opt_itemContext } from "./DuckDBParser.js";
import { Opt_binaryContext } from "./DuckDBParser.js";
import { Copy_delimiterContext } from "./DuckDBParser.js";
import { Opt_usingContext } from "./DuckDBParser.js";
import { Copy_generic_opt_listContext } from "./DuckDBParser.js";
import { Copy_generic_opt_elemContext } from "./DuckDBParser.js";
import { Copy_generic_opt_argContext } from "./DuckDBParser.js";
import { Copy_generic_opt_arg_listContext } from "./DuckDBParser.js";
import { Copy_generic_opt_arg_list_itemContext } from "./DuckDBParser.js";
import { ColumnCreateTableContext } from "./DuckDBParser.js";
import { Pragma_nameContext } from "./DuckDBParser.js";
import { Signed_numberContext } from "./DuckDBParser.js";
import { Pragma_valueContext } from "./DuckDBParser.js";
import { PragmastmtContext } from "./DuckDBParser.js";
import { OpttempContext } from "./DuckDBParser.js";
import { Table_column_listContext } from "./DuckDBParser.js";
import { OpttableelementlistContext } from "./DuckDBParser.js";
import { OpttypedtableelementlistContext } from "./DuckDBParser.js";
import { TableelementlistContext } from "./DuckDBParser.js";
import { TypedtableelementlistContext } from "./DuckDBParser.js";
import { TableelementContext } from "./DuckDBParser.js";
import { TypedtableelementContext } from "./DuckDBParser.js";
import { Column_defContext } from "./DuckDBParser.js";
import { CompressionCluaseContext } from "./DuckDBParser.js";
import { StorageCluaseContext } from "./DuckDBParser.js";
import { ColumnOptionsContext } from "./DuckDBParser.js";
import { ColquallistContext } from "./DuckDBParser.js";
import { ColconstraintContext } from "./DuckDBParser.js";
import { ColconstraintelemContext } from "./DuckDBParser.js";
import { Nulls_distinctContext } from "./DuckDBParser.js";
import { Generated_whenContext } from "./DuckDBParser.js";
import { Deferrable_triggerContext } from "./DuckDBParser.js";
import { Initially_triggerContext } from "./DuckDBParser.js";
import { TablelikeclauseContext } from "./DuckDBParser.js";
import { TablelikeoptionlistContext } from "./DuckDBParser.js";
import { TablelikeoptionContext } from "./DuckDBParser.js";
import { TableconstraintContext } from "./DuckDBParser.js";
import { ConstraintelemContext } from "./DuckDBParser.js";
import { Opt_no_inheritContext } from "./DuckDBParser.js";
import { Opt_column_listContext } from "./DuckDBParser.js";
import { Opt_column_list_createContext } from "./DuckDBParser.js";
import { Column_listContext } from "./DuckDBParser.js";
import { Column_list_createContext } from "./DuckDBParser.js";
import { Opt_c_includeContext } from "./DuckDBParser.js";
import { Key_matchContext } from "./DuckDBParser.js";
import { ExclusionconstraintlistContext } from "./DuckDBParser.js";
import { ExclusionconstraintelemContext } from "./DuckDBParser.js";
import { ExclusionwhereclauseContext } from "./DuckDBParser.js";
import { Key_actionsContext } from "./DuckDBParser.js";
import { Key_updateContext } from "./DuckDBParser.js";
import { Key_deleteContext } from "./DuckDBParser.js";
import { Key_actionContext } from "./DuckDBParser.js";
import { OptinheritContext } from "./DuckDBParser.js";
import { OptpartitionspecContext } from "./DuckDBParser.js";
import { PartitionspecContext } from "./DuckDBParser.js";
import { Part_paramsContext } from "./DuckDBParser.js";
import { Part_elemContext } from "./DuckDBParser.js";
import { Table_access_method_clauseContext } from "./DuckDBParser.js";
import { OptwithContext } from "./DuckDBParser.js";
import { OncommitoptionContext } from "./DuckDBParser.js";
import { OpttablespaceContext } from "./DuckDBParser.js";
import { Index_paramenters_createContext } from "./DuckDBParser.js";
import { OptconstablespaceContext } from "./DuckDBParser.js";
import { ExistingindexContext } from "./DuckDBParser.js";
import { CreatestatsstmtContext } from "./DuckDBParser.js";
import { AlterstatsstmtContext } from "./DuckDBParser.js";
import { QueryCreateTableContext } from "./DuckDBParser.js";
import { Create_as_targetContext } from "./DuckDBParser.js";
import { Opt_with_dataContext } from "./DuckDBParser.js";
import { CreateMaterializedViewContext } from "./DuckDBParser.js";
import { Create_mv_targetContext } from "./DuckDBParser.js";
import { OptnologContext } from "./DuckDBParser.js";
import { RefreshmatviewstmtContext } from "./DuckDBParser.js";
import { CreateseqstmtContext } from "./DuckDBParser.js";
import { AlterseqstmtContext } from "./DuckDBParser.js";
import { OptseqoptlistContext } from "./DuckDBParser.js";
import { OptparenthesizedseqoptlistContext } from "./DuckDBParser.js";
import { SeqoptlistContext } from "./DuckDBParser.js";
import { SeqoptelemContext } from "./DuckDBParser.js";
import { Opt_byContext } from "./DuckDBParser.js";
import { NumericonlyContext } from "./DuckDBParser.js";
import { Numericonly_listContext } from "./DuckDBParser.js";
import { CreateplangstmtContext } from "./DuckDBParser.js";
import { Opt_trustedContext } from "./DuckDBParser.js";
import { Handler_nameContext } from "./DuckDBParser.js";
import { Opt_inline_handlerContext } from "./DuckDBParser.js";
import { Validator_clauseContext } from "./DuckDBParser.js";
import { Opt_validatorContext } from "./DuckDBParser.js";
import { Opt_proceduralContext } from "./DuckDBParser.js";
import { CreatetablespacestmtContext } from "./DuckDBParser.js";
import { OpttablespaceownerContext } from "./DuckDBParser.js";
import { CreateextensionstmtContext } from "./DuckDBParser.js";
import { Create_extension_opt_listContext } from "./DuckDBParser.js";
import { Create_extension_opt_itemContext } from "./DuckDBParser.js";
import { AlterextensionstmtContext } from "./DuckDBParser.js";
import { Alter_extension_opt_listContext } from "./DuckDBParser.js";
import { Alter_extension_opt_itemContext } from "./DuckDBParser.js";
import { AlterextensioncontentsstmtContext } from "./DuckDBParser.js";
import { CreatefdwstmtContext } from "./DuckDBParser.js";
import { Fdw_optionContext } from "./DuckDBParser.js";
import { Fdw_optionsContext } from "./DuckDBParser.js";
import { Opt_fdw_optionsContext } from "./DuckDBParser.js";
import { AlterfdwstmtContext } from "./DuckDBParser.js";
import { Create_generic_optionsContext } from "./DuckDBParser.js";
import { Generic_option_listContext } from "./DuckDBParser.js";
import { Alter_generic_optionsContext } from "./DuckDBParser.js";
import { Alter_generic_option_listContext } from "./DuckDBParser.js";
import { Alter_generic_option_elemContext } from "./DuckDBParser.js";
import { Generic_option_elemContext } from "./DuckDBParser.js";
import { Generic_option_nameContext } from "./DuckDBParser.js";
import { Generic_option_argContext } from "./DuckDBParser.js";
import { CreateforeignserverstmtContext } from "./DuckDBParser.js";
import { Opt_typeContext } from "./DuckDBParser.js";
import { Foreign_server_versionContext } from "./DuckDBParser.js";
import { Opt_foreign_server_versionContext } from "./DuckDBParser.js";
import { AlterforeignserverstmtContext } from "./DuckDBParser.js";
import { CreateForeignTableContext } from "./DuckDBParser.js";
import { CreatePartitionForeignTableContext } from "./DuckDBParser.js";
import { ImportforeignschemastmtContext } from "./DuckDBParser.js";
import { Import_qualification_typeContext } from "./DuckDBParser.js";
import { Import_qualificationContext } from "./DuckDBParser.js";
import { CreateusermappingstmtContext } from "./DuckDBParser.js";
import { Auth_identContext } from "./DuckDBParser.js";
import { AlterusermappingstmtContext } from "./DuckDBParser.js";
import { CreatepolicystmtContext } from "./DuckDBParser.js";
import { AlterpolicystmtContext } from "./DuckDBParser.js";
import { AlterprocedurestmtContext } from "./DuckDBParser.js";
import { Procedure_cluaseContext } from "./DuckDBParser.js";
import { Procedure_actionContext } from "./DuckDBParser.js";
import { RowsecurityoptionalexprContext } from "./DuckDBParser.js";
import { RowsecurityoptionalwithcheckContext } from "./DuckDBParser.js";
import { RowsecuritydefaulttoroleContext } from "./DuckDBParser.js";
import { RowsecurityoptionaltoroleContext } from "./DuckDBParser.js";
import { RowsecuritydefaultpermissiveContext } from "./DuckDBParser.js";
import { RowsecuritydefaultforcmdContext } from "./DuckDBParser.js";
import { Row_security_cmdContext } from "./DuckDBParser.js";
import { CreateamstmtContext } from "./DuckDBParser.js";
import { Am_typeContext } from "./DuckDBParser.js";
import { CreatetrigstmtContext } from "./DuckDBParser.js";
import { TriggeractiontimeContext } from "./DuckDBParser.js";
import { ForeachrowContext } from "./DuckDBParser.js";
import { RoworstatmentContext } from "./DuckDBParser.js";
import { TriggereventsContext } from "./DuckDBParser.js";
import { TriggeroneeventContext } from "./DuckDBParser.js";
import { TriggerreferencingContext } from "./DuckDBParser.js";
import { TriggertransitionsContext } from "./DuckDBParser.js";
import { TriggertransitionContext } from "./DuckDBParser.js";
import { TransitionoldornewContext } from "./DuckDBParser.js";
import { TransitionrowortableContext } from "./DuckDBParser.js";
import { TransitionrelnameContext } from "./DuckDBParser.js";
import { TriggerforspecContext } from "./DuckDBParser.js";
import { TriggerforopteachContext } from "./DuckDBParser.js";
import { TriggerfortypeContext } from "./DuckDBParser.js";
import { TriggerwhenContext } from "./DuckDBParser.js";
import { Function_or_procedureContext } from "./DuckDBParser.js";
import { TriggerfuncargsContext } from "./DuckDBParser.js";
import { TriggerfuncargContext } from "./DuckDBParser.js";
import { OptconstrfromtableContext } from "./DuckDBParser.js";
import { ConstraintattributespecContext } from "./DuckDBParser.js";
import { ConstraintattributeElemContext } from "./DuckDBParser.js";
import { CreateeventtrigstmtContext } from "./DuckDBParser.js";
import { Event_trigger_when_listContext } from "./DuckDBParser.js";
import { Event_trigger_when_itemContext } from "./DuckDBParser.js";
import { Event_trigger_value_listContext } from "./DuckDBParser.js";
import { AltereventtrigstmtContext } from "./DuckDBParser.js";
import { Enable_triggerContext } from "./DuckDBParser.js";
import { CreateassertionstmtContext } from "./DuckDBParser.js";
import { DefinestmtContext } from "./DuckDBParser.js";
import { DefinitionContext } from "./DuckDBParser.js";
import { Def_listContext } from "./DuckDBParser.js";
import { Def_elemContext } from "./DuckDBParser.js";
import { Def_argContext } from "./DuckDBParser.js";
import { Old_aggr_definitionContext } from "./DuckDBParser.js";
import { Old_aggr_listContext } from "./DuckDBParser.js";
import { Old_aggr_elemContext } from "./DuckDBParser.js";
import { Opt_enum_val_listContext } from "./DuckDBParser.js";
import { Enum_val_listContext } from "./DuckDBParser.js";
import { AlterenumstmtContext } from "./DuckDBParser.js";
import { Opt_if_not_existsContext } from "./DuckDBParser.js";
import { CreateopclassstmtContext } from "./DuckDBParser.js";
import { Opclass_item_listContext } from "./DuckDBParser.js";
import { Opclass_itemContext } from "./DuckDBParser.js";
import { Opt_defaultContext } from "./DuckDBParser.js";
import { Opt_opfamilyContext } from "./DuckDBParser.js";
import { Opclass_purposeContext } from "./DuckDBParser.js";
import { Opt_recheckContext } from "./DuckDBParser.js";
import { CreateopfamilystmtContext } from "./DuckDBParser.js";
import { AlteropfamilystmtContext } from "./DuckDBParser.js";
import { Opclass_drop_listContext } from "./DuckDBParser.js";
import { Opclass_dropContext } from "./DuckDBParser.js";
import { ReassignownedstmtContext } from "./DuckDBParser.js";
import { DropstmtContext } from "./DuckDBParser.js";
import { View_nameListContext } from "./DuckDBParser.js";
import { Object_type_any_nameContext } from "./DuckDBParser.js";
import { Object_type_nameContext } from "./DuckDBParser.js";
import { Object_type_name_on_any_nameContext } from "./DuckDBParser.js";
import { Any_name_listContext } from "./DuckDBParser.js";
import { Relation_column_nameContext } from "./DuckDBParser.js";
import { Relation_nameContext } from "./DuckDBParser.js";
import { Any_nameContext } from "./DuckDBParser.js";
import { AttrsContext } from "./DuckDBParser.js";
import { Type_name_listContext } from "./DuckDBParser.js";
import { TruncatestmtContext } from "./DuckDBParser.js";
import { Truncate_tableContext } from "./DuckDBParser.js";
import { CommentstmtContext } from "./DuckDBParser.js";
import { Comment_textContext } from "./DuckDBParser.js";
import { SeclabelstmtContext } from "./DuckDBParser.js";
import { Opt_providerContext } from "./DuckDBParser.js";
import { Security_labelContext } from "./DuckDBParser.js";
import { FetchstmtContext } from "./DuckDBParser.js";
import { Fetch_argsContext } from "./DuckDBParser.js";
import { From_inContext } from "./DuckDBParser.js";
import { Opt_from_inContext } from "./DuckDBParser.js";
import { GrantstmtContext } from "./DuckDBParser.js";
import { RevokestmtContext } from "./DuckDBParser.js";
import { PrivilegesContext } from "./DuckDBParser.js";
import { BeforeprivilegeselectlistContext } from "./DuckDBParser.js";
import { BeforeprivilegeselectContext } from "./DuckDBParser.js";
import { Privilege_listContext } from "./DuckDBParser.js";
import { PrivilegeContext } from "./DuckDBParser.js";
import { Privilege_targetContext } from "./DuckDBParser.js";
import { Grantee_listContext } from "./DuckDBParser.js";
import { GranteeContext } from "./DuckDBParser.js";
import { Opt_grant_grant_optionContext } from "./DuckDBParser.js";
import { GrantrolestmtContext } from "./DuckDBParser.js";
import { RevokerolestmtContext } from "./DuckDBParser.js";
import { Opt_grant_admin_optionContext } from "./DuckDBParser.js";
import { Opt_granted_byContext } from "./DuckDBParser.js";
import { AlterdefaultprivilegesstmtContext } from "./DuckDBParser.js";
import { DefacloptionlistContext } from "./DuckDBParser.js";
import { DefacloptionContext } from "./DuckDBParser.js";
import { DefaclactionContext } from "./DuckDBParser.js";
import { Defacl_privilege_targetContext } from "./DuckDBParser.js";
import { IndexstmtContext } from "./DuckDBParser.js";
import { Opt_uniqueContext } from "./DuckDBParser.js";
import { Opt_concurrentlyContext } from "./DuckDBParser.js";
import { Opt_index_nameContext } from "./DuckDBParser.js";
import { Access_method_clauseContext } from "./DuckDBParser.js";
import { Index_paramsContext } from "./DuckDBParser.js";
import { Index_elem_optionsContext } from "./DuckDBParser.js";
import { Index_elemContext } from "./DuckDBParser.js";
import { Opt_includeContext } from "./DuckDBParser.js";
import { Index_including_paramsContext } from "./DuckDBParser.js";
import { Opt_collateContext } from "./DuckDBParser.js";
import { Opt_classContext } from "./DuckDBParser.js";
import { Opt_asc_descContext } from "./DuckDBParser.js";
import { Opt_nulls_orderContext } from "./DuckDBParser.js";
import { CreatefunctionstmtContext } from "./DuckDBParser.js";
import { AttrilistContext } from "./DuckDBParser.js";
import { Opt_or_replaceContext } from "./DuckDBParser.js";
import { Func_argsContext } from "./DuckDBParser.js";
import { Func_args_listContext } from "./DuckDBParser.js";
import { Routine_with_argtypes_listContext } from "./DuckDBParser.js";
import { Routine_with_argtypesContext } from "./DuckDBParser.js";
import { Procedure_with_argtypes_listContext } from "./DuckDBParser.js";
import { Procedure_with_argtypesContext } from "./DuckDBParser.js";
import { Function_with_argtypes_listContext } from "./DuckDBParser.js";
import { Function_with_argtypesContext } from "./DuckDBParser.js";
import { Func_args_with_defaultsContext } from "./DuckDBParser.js";
import { Func_args_with_defaults_listContext } from "./DuckDBParser.js";
import { Func_argContext } from "./DuckDBParser.js";
import { Arg_classContext } from "./DuckDBParser.js";
import { Param_nameContext } from "./DuckDBParser.js";
import { Func_returnContext } from "./DuckDBParser.js";
import { Func_typeContext } from "./DuckDBParser.js";
import { Func_arg_with_defaultContext } from "./DuckDBParser.js";
import { Aggr_argContext } from "./DuckDBParser.js";
import { Aggr_argsContext } from "./DuckDBParser.js";
import { Aggr_args_listContext } from "./DuckDBParser.js";
import { Aggregate_with_argtypesContext } from "./DuckDBParser.js";
import { Aggregate_with_argtypes_listContext } from "./DuckDBParser.js";
import { Createfunc_opt_listContext } from "./DuckDBParser.js";
import { Common_func_opt_itemContext } from "./DuckDBParser.js";
import { Createfunc_opt_itemContext } from "./DuckDBParser.js";
import { Transform_type_listContext } from "./DuckDBParser.js";
import { Opt_definitionContext } from "./DuckDBParser.js";
import { Table_func_columnContext } from "./DuckDBParser.js";
import { Table_func_column_listContext } from "./DuckDBParser.js";
import { AlterfunctionstmtContext } from "./DuckDBParser.js";
import { AlterFunctionTypeClauseContext } from "./DuckDBParser.js";
import { Alterfunc_opt_listContext } from "./DuckDBParser.js";
import { Opt_restrictContext } from "./DuckDBParser.js";
import { RemovefuncstmtContext } from "./DuckDBParser.js";
import { RemoveaggrstmtContext } from "./DuckDBParser.js";
import { RemoveoperstmtContext } from "./DuckDBParser.js";
import { Oper_argtypesContext } from "./DuckDBParser.js";
import { Any_operatorContext } from "./DuckDBParser.js";
import { Operator_with_argtypes_listContext } from "./DuckDBParser.js";
import { Operator_with_argtypesContext } from "./DuckDBParser.js";
import { DostmtContext } from "./DuckDBParser.js";
import { Dostmt_opt_listContext } from "./DuckDBParser.js";
import { Dostmt_opt_itemContext } from "./DuckDBParser.js";
import { CreatecaststmtContext } from "./DuckDBParser.js";
import { Cast_contextContext } from "./DuckDBParser.js";
import { Opt_if_existsContext } from "./DuckDBParser.js";
import { CreatetransformstmtContext } from "./DuckDBParser.js";
import { Transform_element_listContext } from "./DuckDBParser.js";
import { ReindexstmtContext } from "./DuckDBParser.js";
import { Reindex_target_typeContext } from "./DuckDBParser.js";
import { Reindex_target_multitableContext } from "./DuckDBParser.js";
import { Reindex_option_listContext } from "./DuckDBParser.js";
import { Reindex_option_elemContext } from "./DuckDBParser.js";
import { AltertblspcstmtContext } from "./DuckDBParser.js";
import { RenamestmtContext } from "./DuckDBParser.js";
import { Opt_set_dataContext } from "./DuckDBParser.js";
import { AlterobjectdependsstmtContext } from "./DuckDBParser.js";
import { Opt_noContext } from "./DuckDBParser.js";
import { AlterobjectschemastmtContext } from "./DuckDBParser.js";
import { AlteroperatorstmtContext } from "./DuckDBParser.js";
import { Operator_def_listContext } from "./DuckDBParser.js";
import { Operator_def_elemContext } from "./DuckDBParser.js";
import { Operator_def_argContext } from "./DuckDBParser.js";
import { AltertypestmtContext } from "./DuckDBParser.js";
import { AlterownerstmtContext } from "./DuckDBParser.js";
import { CreatepublicationstmtContext } from "./DuckDBParser.js";
import { Opt_publication_for_tablesContext } from "./DuckDBParser.js";
import { Publication_for_tablesContext } from "./DuckDBParser.js";
import { AlterpublicationstmtContext } from "./DuckDBParser.js";
import { CreatesubscriptionstmtContext } from "./DuckDBParser.js";
import { Publication_name_listContext } from "./DuckDBParser.js";
import { Publication_name_itemContext } from "./DuckDBParser.js";
import { AltersubscriptionstmtContext } from "./DuckDBParser.js";
import { RulestmtContext } from "./DuckDBParser.js";
import { RuleactionlistContext } from "./DuckDBParser.js";
import { RuleactionmultiContext } from "./DuckDBParser.js";
import { RuleactionstmtContext } from "./DuckDBParser.js";
import { RuleactionstmtOrEmptyContext } from "./DuckDBParser.js";
import { EventContext } from "./DuckDBParser.js";
import { Opt_insteadContext } from "./DuckDBParser.js";
import { NotifystmtContext } from "./DuckDBParser.js";
import { Notify_payloadContext } from "./DuckDBParser.js";
import { ListenstmtContext } from "./DuckDBParser.js";
import { UnlistenstmtContext } from "./DuckDBParser.js";
import { TransactionstmtContext } from "./DuckDBParser.js";
import { Opt_transactionContext } from "./DuckDBParser.js";
import { Transaction_mode_itemContext } from "./DuckDBParser.js";
import { Transaction_mode_listContext } from "./DuckDBParser.js";
import { Transaction_mode_list_or_emptyContext } from "./DuckDBParser.js";
import { Opt_transaction_chainContext } from "./DuckDBParser.js";
import { CreateViewContext } from "./DuckDBParser.js";
import { Opt_check_optionContext } from "./DuckDBParser.js";
import { LoadstmtContext } from "./DuckDBParser.js";
import { CreateDatabaseContext } from "./DuckDBParser.js";
import { Createdb_opt_listContext } from "./DuckDBParser.js";
import { Createdb_opt_itemsContext } from "./DuckDBParser.js";
import { Createdb_opt_itemContext } from "./DuckDBParser.js";
import { Createdb_opt_nameContext } from "./DuckDBParser.js";
import { Opt_equalContext } from "./DuckDBParser.js";
import { AlterdatabasestmtContext } from "./DuckDBParser.js";
import { AlterdatabasesetstmtContext } from "./DuckDBParser.js";
import { Drop_option_listContext } from "./DuckDBParser.js";
import { Drop_optionContext } from "./DuckDBParser.js";
import { AltercollationstmtContext } from "./DuckDBParser.js";
import { AltersystemstmtContext } from "./DuckDBParser.js";
import { CreatedomainstmtContext } from "./DuckDBParser.js";
import { AlterdomainstmtContext } from "./DuckDBParser.js";
import { Opt_asContext } from "./DuckDBParser.js";
import { AltertsdictionarystmtContext } from "./DuckDBParser.js";
import { AltertsconfigurationstmtContext } from "./DuckDBParser.js";
import { Any_withContext } from "./DuckDBParser.js";
import { CreateconversionstmtContext } from "./DuckDBParser.js";
import { ClusterstmtContext } from "./DuckDBParser.js";
import { Opt_verbose_listContext } from "./DuckDBParser.js";
import { Cluster_index_specificationContext } from "./DuckDBParser.js";
import { VacuumstmtContext } from "./DuckDBParser.js";
import { AnalyzestmtContext } from "./DuckDBParser.js";
import { Vac_analyze_option_listContext } from "./DuckDBParser.js";
import { Analyze_keywordContext } from "./DuckDBParser.js";
import { Vac_analyze_option_elemContext } from "./DuckDBParser.js";
import { Vac_analyze_option_nameContext } from "./DuckDBParser.js";
import { Vac_analyze_option_argContext } from "./DuckDBParser.js";
import { Opt_analyzeContext } from "./DuckDBParser.js";
import { Analyze_options_listContext } from "./DuckDBParser.js";
import { Analyze_option_elemContext } from "./DuckDBParser.js";
import { Opt_verboseContext } from "./DuckDBParser.js";
import { Opt_skiplockContext } from "./DuckDBParser.js";
import { Opt_buffer_usage_limitContext } from "./DuckDBParser.js";
import { Opt_fullContext } from "./DuckDBParser.js";
import { Opt_freezeContext } from "./DuckDBParser.js";
import { Opt_name_listContext } from "./DuckDBParser.js";
import { Vacuum_relationContext } from "./DuckDBParser.js";
import { Vacuum_relation_listContext } from "./DuckDBParser.js";
import { Opt_vacuum_relation_listContext } from "./DuckDBParser.js";
import { ExplainstmtContext } from "./DuckDBParser.js";
import { ExplainablestmtContext } from "./DuckDBParser.js";
import { Explain_option_listContext } from "./DuckDBParser.js";
import { Explain_option_elemContext } from "./DuckDBParser.js";
import { Explain_option_nameContext } from "./DuckDBParser.js";
import { Explain_option_argContext } from "./DuckDBParser.js";
import { PreparestmtContext } from "./DuckDBParser.js";
import { Prep_type_clauseContext } from "./DuckDBParser.js";
import { PreparablestmtContext } from "./DuckDBParser.js";
import { ExecutestmtContext } from "./DuckDBParser.js";
import { Execute_param_clauseContext } from "./DuckDBParser.js";
import { DeallocatestmtContext } from "./DuckDBParser.js";
import { InsertStatementContext } from "./DuckDBParser.js";
import { Insert_targetContext } from "./DuckDBParser.js";
import { Insert_restContext } from "./DuckDBParser.js";
import { Override_kindContext } from "./DuckDBParser.js";
import { Insert_column_listContext } from "./DuckDBParser.js";
import { Insert_column_itemContext } from "./DuckDBParser.js";
import { Opt_on_conflictContext } from "./DuckDBParser.js";
import { Opt_conf_exprContext } from "./DuckDBParser.js";
import { Returning_clauseContext } from "./DuckDBParser.js";
import { DeletestmtContext } from "./DuckDBParser.js";
import { Using_clauseContext } from "./DuckDBParser.js";
import { LockstmtContext } from "./DuckDBParser.js";
import { Opt_lockContext } from "./DuckDBParser.js";
import { Lock_typeContext } from "./DuckDBParser.js";
import { Opt_nowaitContext } from "./DuckDBParser.js";
import { Opt_nowait_or_skipContext } from "./DuckDBParser.js";
import { UpdatestmtContext } from "./DuckDBParser.js";
import { Set_clause_listContext } from "./DuckDBParser.js";
import { Set_clauseContext } from "./DuckDBParser.js";
import { Set_targetContext } from "./DuckDBParser.js";
import { Set_target_listContext } from "./DuckDBParser.js";
import { DeclarecursorstmtContext } from "./DuckDBParser.js";
import { Cursor_nameContext } from "./DuckDBParser.js";
import { Cursor_optionsContext } from "./DuckDBParser.js";
import { Opt_holdContext } from "./DuckDBParser.js";
import { SelectStatementContext } from "./DuckDBParser.js";
import { Select_with_parensContext } from "./DuckDBParser.js";
import { Select_no_parensContext } from "./DuckDBParser.js";
import { Select_clauseContext } from "./DuckDBParser.js";
import { Simple_selectContext } from "./DuckDBParser.js";
import { UnionContext } from "./DuckDBParser.js";
import { IntersectContext } from "./DuckDBParser.js";
import { ExceptContext } from "./DuckDBParser.js";
import { Set_operator_with_all_or_distinctContext } from "./DuckDBParser.js";
import { With_clauseContext } from "./DuckDBParser.js";
import { Cte_listContext } from "./DuckDBParser.js";
import { Common_table_exprContext } from "./DuckDBParser.js";
import { Search_cluaseContext } from "./DuckDBParser.js";
import { Cycle_cluaseContext } from "./DuckDBParser.js";
import { Opt_materializedContext } from "./DuckDBParser.js";
import { Opt_with_clauseContext } from "./DuckDBParser.js";
import { Into_clauseContext } from "./DuckDBParser.js";
import { Opt_strictContext } from "./DuckDBParser.js";
import { OpttempTableNameContext } from "./DuckDBParser.js";
import { Opt_tableContext } from "./DuckDBParser.js";
import { All_or_distinctContext } from "./DuckDBParser.js";
import { Distinct_clauseContext } from "./DuckDBParser.js";
import { Opt_all_clauseContext } from "./DuckDBParser.js";
import { Opt_sort_clauseContext } from "./DuckDBParser.js";
import { Sort_clauseContext } from "./DuckDBParser.js";
import { Sortby_listContext } from "./DuckDBParser.js";
import { SortbyContext } from "./DuckDBParser.js";
import { Select_limitContext } from "./DuckDBParser.js";
import { Opt_select_limitContext } from "./DuckDBParser.js";
import { Limit_clauseContext } from "./DuckDBParser.js";
import { Fetch_clauseContext } from "./DuckDBParser.js";
import { Offset_clauseContext } from "./DuckDBParser.js";
import { Select_limit_valueContext } from "./DuckDBParser.js";
import { Select_offset_valueContext } from "./DuckDBParser.js";
import { Select_fetch_first_valueContext } from "./DuckDBParser.js";
import { I_or_f_constContext } from "./DuckDBParser.js";
import { Row_or_rowsContext } from "./DuckDBParser.js";
import { First_or_nextContext } from "./DuckDBParser.js";
import { Group_clauseContext } from "./DuckDBParser.js";
import { Group_by_listContext } from "./DuckDBParser.js";
import { Group_by_itemContext } from "./DuckDBParser.js";
import { Empty_grouping_setContext } from "./DuckDBParser.js";
import { Rollup_clauseContext } from "./DuckDBParser.js";
import { Cube_clauseContext } from "./DuckDBParser.js";
import { Grouping_sets_clauseContext } from "./DuckDBParser.js";
import { Having_clauseContext } from "./DuckDBParser.js";
import { For_locking_clauseContext } from "./DuckDBParser.js";
import { Opt_for_locking_clauseContext } from "./DuckDBParser.js";
import { For_locking_itemsContext } from "./DuckDBParser.js";
import { For_locking_itemContext } from "./DuckDBParser.js";
import { For_locking_strengthContext } from "./DuckDBParser.js";
import { Locked_rels_listContext } from "./DuckDBParser.js";
import { Values_clauseContext } from "./DuckDBParser.js";
import { From_clauseContext } from "./DuckDBParser.js";
import { From_listContext } from "./DuckDBParser.js";
import { Table_refContext } from "./DuckDBParser.js";
import { Alias_clauseContext } from "./DuckDBParser.js";
import { Opt_alias_clauseContext } from "./DuckDBParser.js";
import { Func_alias_clauseContext } from "./DuckDBParser.js";
import { Join_typeContext } from "./DuckDBParser.js";
import { Join_qualContext } from "./DuckDBParser.js";
import { Relation_exprContext } from "./DuckDBParser.js";
import { View_relation_exprContext } from "./DuckDBParser.js";
import { Publication_relation_exprContext } from "./DuckDBParser.js";
import { Relation_expr_listContext } from "./DuckDBParser.js";
import { Publication_relation_expr_listContext } from "./DuckDBParser.js";
import { Relation_expr_opt_aliasContext } from "./DuckDBParser.js";
import { Tablesample_clauseContext } from "./DuckDBParser.js";
import { Opt_repeatable_clauseContext } from "./DuckDBParser.js";
import { Func_tableContext } from "./DuckDBParser.js";
import { Rowsfrom_itemContext } from "./DuckDBParser.js";
import { Rowsfrom_listContext } from "./DuckDBParser.js";
import { Opt_col_def_listContext } from "./DuckDBParser.js";
import { Opt_ordinalityContext } from "./DuckDBParser.js";
import { Where_clauseContext } from "./DuckDBParser.js";
import { Where_or_current_clauseContext } from "./DuckDBParser.js";
import { OpttablefuncelementlistContext } from "./DuckDBParser.js";
import { TablefuncelementlistContext } from "./DuckDBParser.js";
import { TablefuncelementContext } from "./DuckDBParser.js";
import { XmltableContext } from "./DuckDBParser.js";
import { Xmltable_column_listContext } from "./DuckDBParser.js";
import { Xmltable_column_elContext } from "./DuckDBParser.js";
import { Xmltable_column_option_listContext } from "./DuckDBParser.js";
import { Xmltable_column_option_elContext } from "./DuckDBParser.js";
import { Xml_namespace_listContext } from "./DuckDBParser.js";
import { Xml_namespace_elContext } from "./DuckDBParser.js";
import { TypenameContext } from "./DuckDBParser.js";
import { Opt_array_boundsContext } from "./DuckDBParser.js";
import { SimpletypenameContext } from "./DuckDBParser.js";
import { ConsttypenameContext } from "./DuckDBParser.js";
import { GenerictypeContext } from "./DuckDBParser.js";
import { Opt_type_modifiersContext } from "./DuckDBParser.js";
import { NumericContext } from "./DuckDBParser.js";
import { Opt_floatContext } from "./DuckDBParser.js";
import { BitContext } from "./DuckDBParser.js";
import { ConstbitContext } from "./DuckDBParser.js";
import { BitwithlengthContext } from "./DuckDBParser.js";
import { BitwithoutlengthContext } from "./DuckDBParser.js";
import { CharacterContext } from "./DuckDBParser.js";
import { ConstcharacterContext } from "./DuckDBParser.js";
import { Character_cContext } from "./DuckDBParser.js";
import { Opt_varyingContext } from "./DuckDBParser.js";
import { ConstdatetimeContext } from "./DuckDBParser.js";
import { ConstintervalContext } from "./DuckDBParser.js";
import { Opt_timezoneContext } from "./DuckDBParser.js";
import { Opt_intervalContext } from "./DuckDBParser.js";
import { Interval_secondContext } from "./DuckDBParser.js";
import { Opt_escapeContext } from "./DuckDBParser.js";
import { A_exprContext } from "./DuckDBParser.js";
import { A_expr_qualContext } from "./DuckDBParser.js";
import { A_expr_lesslessContext } from "./DuckDBParser.js";
import { A_expr_orContext } from "./DuckDBParser.js";
import { A_expr_andContext } from "./DuckDBParser.js";
import { A_expr_inContext } from "./DuckDBParser.js";
import { A_expr_unary_notContext } from "./DuckDBParser.js";
import { A_expr_isnullContext } from "./DuckDBParser.js";
import { A_expr_is_notContext } from "./DuckDBParser.js";
import { A_expr_compareContext } from "./DuckDBParser.js";
import { A_expr_likeContext } from "./DuckDBParser.js";
import { A_expr_qual_opContext } from "./DuckDBParser.js";
import { A_expr_unary_qualopContext } from "./DuckDBParser.js";
import { A_expr_addContext } from "./DuckDBParser.js";
import { A_expr_mulContext } from "./DuckDBParser.js";
import { A_expr_caretContext } from "./DuckDBParser.js";
import { A_expr_unary_signContext } from "./DuckDBParser.js";
import { A_expr_at_time_zoneContext } from "./DuckDBParser.js";
import { A_expr_collateContext } from "./DuckDBParser.js";
import { A_expr_typecastContext } from "./DuckDBParser.js";
import { B_exprContext } from "./DuckDBParser.js";
import { C_expr_existsContext } from "./DuckDBParser.js";
import { C_expr_exprContext } from "./DuckDBParser.js";
import { C_expr_caseContext } from "./DuckDBParser.js";
import { PlsqlvariablenameContext } from "./DuckDBParser.js";
import { Func_applicationContext } from "./DuckDBParser.js";
import { Func_exprContext } from "./DuckDBParser.js";
import { Func_expr_windowlessContext } from "./DuckDBParser.js";
import { Func_expr_common_subexprContext } from "./DuckDBParser.js";
import { Xml_root_versionContext } from "./DuckDBParser.js";
import { Opt_xml_root_standaloneContext } from "./DuckDBParser.js";
import { Xml_attributesContext } from "./DuckDBParser.js";
import { Xml_attribute_listContext } from "./DuckDBParser.js";
import { Xml_attribute_elContext } from "./DuckDBParser.js";
import { Document_or_contentContext } from "./DuckDBParser.js";
import { Xml_whitespace_optionContext } from "./DuckDBParser.js";
import { Xmlexists_argumentContext } from "./DuckDBParser.js";
import { Xml_passing_mechContext } from "./DuckDBParser.js";
import { Within_group_clauseContext } from "./DuckDBParser.js";
import { Filter_clauseContext } from "./DuckDBParser.js";
import { Window_clauseContext } from "./DuckDBParser.js";
import { Window_definition_listContext } from "./DuckDBParser.js";
import { Window_definitionContext } from "./DuckDBParser.js";
import { Over_clauseContext } from "./DuckDBParser.js";
import { Window_specificationContext } from "./DuckDBParser.js";
import { Opt_existing_window_nameContext } from "./DuckDBParser.js";
import { Opt_partition_clauseContext } from "./DuckDBParser.js";
import { Opt_frame_clauseContext } from "./DuckDBParser.js";
import { Frame_extentContext } from "./DuckDBParser.js";
import { Frame_boundContext } from "./DuckDBParser.js";
import { Opt_window_exclusion_clauseContext } from "./DuckDBParser.js";
import { RowContext } from "./DuckDBParser.js";
import { Explicit_rowContext } from "./DuckDBParser.js";
import { Implicit_rowContext } from "./DuckDBParser.js";
import { Sub_typeContext } from "./DuckDBParser.js";
import { All_opContext } from "./DuckDBParser.js";
import { MathopContext } from "./DuckDBParser.js";
import { Qual_opContext } from "./DuckDBParser.js";
import { Qual_all_opContext } from "./DuckDBParser.js";
import { Subquery_OpContext } from "./DuckDBParser.js";
import { Expr_listContext } from "./DuckDBParser.js";
import { Column_expr_list_noparenContext } from "./DuckDBParser.js";
import { Column_expr_listContext } from "./DuckDBParser.js";
import { Column_exprContext } from "./DuckDBParser.js";
import { Column_expr_noparenContext } from "./DuckDBParser.js";
import { Func_arg_listContext } from "./DuckDBParser.js";
import { Func_arg_exprContext } from "./DuckDBParser.js";
import { Type_listContext } from "./DuckDBParser.js";
import { Array_exprContext } from "./DuckDBParser.js";
import { Array_expr_listContext } from "./DuckDBParser.js";
import { Extract_listContext } from "./DuckDBParser.js";
import { Extract_argContext } from "./DuckDBParser.js";
import { Unicode_normal_formContext } from "./DuckDBParser.js";
import { Overlay_listContext } from "./DuckDBParser.js";
import { Position_listContext } from "./DuckDBParser.js";
import { Substr_listContext } from "./DuckDBParser.js";
import { Trim_listContext } from "./DuckDBParser.js";
import { In_expr_selectContext } from "./DuckDBParser.js";
import { In_expr_listContext } from "./DuckDBParser.js";
import { Case_exprContext } from "./DuckDBParser.js";
import { When_clause_listContext } from "./DuckDBParser.js";
import { When_clauseContext } from "./DuckDBParser.js";
import { Case_defaultContext } from "./DuckDBParser.js";
import { Case_argContext } from "./DuckDBParser.js";
import { ColumnrefContext } from "./DuckDBParser.js";
import { Indirection_elContext } from "./DuckDBParser.js";
import { Opt_slice_boundContext } from "./DuckDBParser.js";
import { IndirectionContext } from "./DuckDBParser.js";
import { Opt_indirectionContext } from "./DuckDBParser.js";
import { Opt_target_listContext } from "./DuckDBParser.js";
import { Target_listContext } from "./DuckDBParser.js";
import { Target_labelContext } from "./DuckDBParser.js";
import { Target_starContext } from "./DuckDBParser.js";
import { Qualified_name_listContext } from "./DuckDBParser.js";
import { Table_name_listContext } from "./DuckDBParser.js";
import { Schema_name_listContext } from "./DuckDBParser.js";
import { Database_nameListContext } from "./DuckDBParser.js";
import { Procedure_name_listContext } from "./DuckDBParser.js";
import { TablespaceNameCreateContext } from "./DuckDBParser.js";
import { TablespaceNameContext } from "./DuckDBParser.js";
import { TableNameCreateContext } from "./DuckDBParser.js";
import { TableNameContext } from "./DuckDBParser.js";
import { ViewNameCreateContext } from "./DuckDBParser.js";
import { ViewNameContext } from "./DuckDBParser.js";
import { Qualified_nameContext } from "./DuckDBParser.js";
import { Tablespace_name_listContext } from "./DuckDBParser.js";
import { Name_listContext } from "./DuckDBParser.js";
import { DatabaseNameCreateContext } from "./DuckDBParser.js";
import { DatabaseNameContext } from "./DuckDBParser.js";
import { SchemaNameContext } from "./DuckDBParser.js";
import { RoutineNameCreateContext } from "./DuckDBParser.js";
import { RoutineNameContext } from "./DuckDBParser.js";
import { ProcedureNameContext } from "./DuckDBParser.js";
import { ProcedureNameCreateContext } from "./DuckDBParser.js";
import { ColumnNameContext } from "./DuckDBParser.js";
import { ColumnNameMatchContext } from "./DuckDBParser.js";
import { ColumnNameCreateContext } from "./DuckDBParser.js";
import { NameContext } from "./DuckDBParser.js";
import { Attr_nameContext } from "./DuckDBParser.js";
import { File_nameContext } from "./DuckDBParser.js";
import { FunctionNameCreateContext } from "./DuckDBParser.js";
import { FunctionNameContext } from "./DuckDBParser.js";
import { Usual_nameContext } from "./DuckDBParser.js";
import { AexprconstContext } from "./DuckDBParser.js";
import { XconstContext } from "./DuckDBParser.js";
import { BconstContext } from "./DuckDBParser.js";
import { FconstContext } from "./DuckDBParser.js";
import { IconstContext } from "./DuckDBParser.js";
import { SconstContext } from "./DuckDBParser.js";
import { AnysconstContext } from "./DuckDBParser.js";
import { Opt_uescapeContext } from "./DuckDBParser.js";
import { SignediconstContext } from "./DuckDBParser.js";
import { GroupnameContext } from "./DuckDBParser.js";
import { RoleidContext } from "./DuckDBParser.js";
import { RolespecContext } from "./DuckDBParser.js";
import { Role_listContext } from "./DuckDBParser.js";
import { ColidContext } from "./DuckDBParser.js";
import { Index_method_choicesContext } from "./DuckDBParser.js";
import { Exclude_elementContext } from "./DuckDBParser.js";
import { Index_paramentersContext } from "./DuckDBParser.js";
import { Type_function_nameContext } from "./DuckDBParser.js";
import { Type_usual_nameContext } from "./DuckDBParser.js";
import { Nonreservedword_columnContext } from "./DuckDBParser.js";
import { NonreservedwordContext } from "./DuckDBParser.js";
import { CollabelContext } from "./DuckDBParser.js";
import { IdentifierContext } from "./DuckDBParser.js";
import { PlsqlidentifierContext } from "./DuckDBParser.js";
import { Unreserved_keywordContext } from "./DuckDBParser.js";
import { Col_name_keywordContext } from "./DuckDBParser.js";
import { Type_func_name_keywordContext } from "./DuckDBParser.js";
import { Reserved_keywordContext } from "./DuckDBParser.js";
import { Pl_functionContext } from "./DuckDBParser.js";
import { Comp_optionsContext } from "./DuckDBParser.js";
import { Comp_optionContext } from "./DuckDBParser.js";
import { SharpContext } from "./DuckDBParser.js";
import { Option_valueContext } from "./DuckDBParser.js";
import { Opt_semiContext } from "./DuckDBParser.js";
import { Pl_blockContext } from "./DuckDBParser.js";
import { Decl_sectContext } from "./DuckDBParser.js";
import { Decl_startContext } from "./DuckDBParser.js";
import { Decl_stmtsContext } from "./DuckDBParser.js";
import { Label_declContext } from "./DuckDBParser.js";
import { Decl_stmtContext } from "./DuckDBParser.js";
import { Decl_statementContext } from "./DuckDBParser.js";
import { Opt_scrollableContext } from "./DuckDBParser.js";
import { Decl_cursor_queryContext } from "./DuckDBParser.js";
import { Decl_cursor_argsContext } from "./DuckDBParser.js";
import { Decl_cursor_arglistContext } from "./DuckDBParser.js";
import { Decl_cursor_argContext } from "./DuckDBParser.js";
import { Decl_is_forContext } from "./DuckDBParser.js";
import { Decl_aliasitemContext } from "./DuckDBParser.js";
import { Decl_varnameContext } from "./DuckDBParser.js";
import { Decl_constContext } from "./DuckDBParser.js";
import { Decl_datatypeContext } from "./DuckDBParser.js";
import { Decl_collateContext } from "./DuckDBParser.js";
import { Decl_notnullContext } from "./DuckDBParser.js";
import { Decl_defvalContext } from "./DuckDBParser.js";
import { Decl_defkeyContext } from "./DuckDBParser.js";
import { Assign_operatorContext } from "./DuckDBParser.js";
import { Proc_sectContext } from "./DuckDBParser.js";
import { Proc_stmtContext } from "./DuckDBParser.js";
import { Stmt_performContext } from "./DuckDBParser.js";
import { Stmt_callContext } from "./DuckDBParser.js";
import { Opt_expr_listContext } from "./DuckDBParser.js";
import { Stmt_assignContext } from "./DuckDBParser.js";
import { Stmt_getdiagContext } from "./DuckDBParser.js";
import { Getdiag_area_optContext } from "./DuckDBParser.js";
import { Getdiag_listContext } from "./DuckDBParser.js";
import { Getdiag_list_itemContext } from "./DuckDBParser.js";
import { Getdiag_itemContext } from "./DuckDBParser.js";
import { Getdiag_targetContext } from "./DuckDBParser.js";
import { Assign_varContext } from "./DuckDBParser.js";
import { Stmt_ifContext } from "./DuckDBParser.js";
import { Stmt_elsifsContext } from "./DuckDBParser.js";
import { Stmt_elseContext } from "./DuckDBParser.js";
import { Stmt_caseContext } from "./DuckDBParser.js";
import { Opt_expr_until_whenContext } from "./DuckDBParser.js";
import { Case_when_listContext } from "./DuckDBParser.js";
import { Case_whenContext } from "./DuckDBParser.js";
import { Opt_case_elseContext } from "./DuckDBParser.js";
import { Stmt_loopContext } from "./DuckDBParser.js";
import { Stmt_whileContext } from "./DuckDBParser.js";
import { Stmt_forContext } from "./DuckDBParser.js";
import { For_controlContext } from "./DuckDBParser.js";
import { Opt_for_using_expressionContext } from "./DuckDBParser.js";
import { Opt_cursor_parametersContext } from "./DuckDBParser.js";
import { Opt_reverseContext } from "./DuckDBParser.js";
import { Opt_by_expressionContext } from "./DuckDBParser.js";
import { For_variableContext } from "./DuckDBParser.js";
import { Stmt_foreach_aContext } from "./DuckDBParser.js";
import { Foreach_sliceContext } from "./DuckDBParser.js";
import { Stmt_exitContext } from "./DuckDBParser.js";
import { Exit_typeContext } from "./DuckDBParser.js";
import { Stmt_returnContext } from "./DuckDBParser.js";
import { Opt_return_resultContext } from "./DuckDBParser.js";
import { Stmt_raiseContext } from "./DuckDBParser.js";
import { Opt_stmt_raise_levelContext } from "./DuckDBParser.js";
import { Opt_raise_listContext } from "./DuckDBParser.js";
import { Opt_raise_usingContext } from "./DuckDBParser.js";
import { Opt_raise_using_elemContext } from "./DuckDBParser.js";
import { Opt_raise_using_elem_listContext } from "./DuckDBParser.js";
import { Stmt_assertContext } from "./DuckDBParser.js";
import { Opt_stmt_assert_messageContext } from "./DuckDBParser.js";
import { Loop_bodyContext } from "./DuckDBParser.js";
import { Stmt_execsqlContext } from "./DuckDBParser.js";
import { Stmt_dynexecuteContext } from "./DuckDBParser.js";
import { Opt_execute_usingContext } from "./DuckDBParser.js";
import { Opt_execute_using_listContext } from "./DuckDBParser.js";
import { Opt_execute_intoContext } from "./DuckDBParser.js";
import { Stmt_openContext } from "./DuckDBParser.js";
import { Opt_open_bound_list_itemContext } from "./DuckDBParser.js";
import { Opt_open_bound_listContext } from "./DuckDBParser.js";
import { Opt_open_usingContext } from "./DuckDBParser.js";
import { Opt_scroll_optionContext } from "./DuckDBParser.js";
import { Opt_scroll_option_noContext } from "./DuckDBParser.js";
import { Stmt_fetchContext } from "./DuckDBParser.js";
import { Into_targetContext } from "./DuckDBParser.js";
import { Opt_cursor_fromContext } from "./DuckDBParser.js";
import { Opt_fetch_directionContext } from "./DuckDBParser.js";
import { Stmt_moveContext } from "./DuckDBParser.js";
import { MergestmtContext } from "./DuckDBParser.js";
import { Data_sourceContext } from "./DuckDBParser.js";
import { Join_conditionContext } from "./DuckDBParser.js";
import { Merge_when_clauseContext } from "./DuckDBParser.js";
import { Merge_insertContext } from "./DuckDBParser.js";
import { Merge_updateContext } from "./DuckDBParser.js";
import { Default_values_or_valuesContext } from "./DuckDBParser.js";
import { ExprofdefaultlistContext } from "./DuckDBParser.js";
import { ExprofdefaultContext } from "./DuckDBParser.js";
import { Stmt_closeContext } from "./DuckDBParser.js";
import { Stmt_nullContext } from "./DuckDBParser.js";
import { Stmt_commitContext } from "./DuckDBParser.js";
import { Stmt_rollbackContext } from "./DuckDBParser.js";
import { Plsql_opt_transaction_chainContext } from "./DuckDBParser.js";
import { Stmt_setContext } from "./DuckDBParser.js";
import { Cursor_variableContext } from "./DuckDBParser.js";
import { Exception_sectContext } from "./DuckDBParser.js";
import { Proc_exceptionsContext } from "./DuckDBParser.js";
import { Proc_exceptionContext } from "./DuckDBParser.js";
import { Proc_conditionsContext } from "./DuckDBParser.js";
import { Proc_conditionContext } from "./DuckDBParser.js";
import { Opt_block_labelContext } from "./DuckDBParser.js";
import { Opt_loop_labelContext } from "./DuckDBParser.js";
import { Opt_labelContext } from "./DuckDBParser.js";
import { Opt_exitcondContext } from "./DuckDBParser.js";
import { Any_identifierContext } from "./DuckDBParser.js";
import { Plsql_unreserved_keywordContext } from "./DuckDBParser.js";
import { Sql_expressionContext } from "./DuckDBParser.js";
import { Expr_until_thenContext } from "./DuckDBParser.js";
import { Expr_until_semiContext } from "./DuckDBParser.js";
import { Expr_until_rightbracketContext } from "./DuckDBParser.js";
import { Expr_until_loopContext } from "./DuckDBParser.js";
import { Make_execsql_stmtContext } from "./DuckDBParser.js";
import { Opt_returning_clause_intoContext } from "./DuckDBParser.js";
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DuckDBParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export declare class DuckDBParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `DuckDBParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.plsqlroot`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlroot?: (ctx: PlsqlrootContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.singleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStmt?: (ctx: SingleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.plsqlconsolecommand`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlconsolecommand?: (ctx: PlsqlconsolecommandContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.callstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallstmt?: (ctx: CallstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createrolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreaterolestmt?: (ctx: CreaterolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_with`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with?: (ctx: Opt_withContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optrolelist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptrolelist?: (ctx: OptrolelistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alteroptrolelist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteroptrolelist?: (ctx: AlteroptrolelistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alteroptroleelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteroptroleelem?: (ctx: AlteroptroleelemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createoptroleelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateoptroleelem?: (ctx: CreateoptroleelemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createuserstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateuserstmt?: (ctx: CreateuserstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterrolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterrolestmt?: (ctx: AlterrolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_in_database`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_in_database?: (ctx: Opt_in_databaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterrolesetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterrolesetstmt?: (ctx: AlterrolesetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterroutinestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterroutinestmt?: (ctx: AlterroutinestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_routine_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_routine_cluase?: (ctx: Alter_routine_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.routine_action_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_action_list?: (ctx: Routine_action_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.routine_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_action?: (ctx: Routine_actionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.creategroupstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreategroupstmt?: (ctx: CreategroupstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altergroupstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltergroupstmt?: (ctx: AltergroupstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.add_drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd_drop?: (ctx: Add_dropContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createschemastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateschemastmt?: (ctx: CreateschemastmtContext) => Result;
    /**
     * Visit a parse tree produced by the `schemaNameCreate`
     * labeled alternative in `DuckDBParser.schema_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaNameCreate?: (ctx: SchemaNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optschemaeltlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptschemaeltlist?: (ctx: OptschemaeltlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.schema_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_stmt?: (ctx: Schema_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.variablesetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariablesetstmt?: (ctx: VariablesetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_rest?: (ctx: Set_restContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generic_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_set?: (ctx: Generic_setContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_rest_more`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_rest_more?: (ctx: Set_rest_moreContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.var_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_name?: (ctx: Var_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.var_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_list?: (ctx: Var_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.var_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVar_value?: (ctx: Var_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.iso_level`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIso_level?: (ctx: Iso_levelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_boolean_or_string_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_boolean_or_string_column?: (ctx: Opt_boolean_or_string_columnContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_boolean_or_string`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_boolean_or_string?: (ctx: Opt_boolean_or_stringContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.zone_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitZone_value?: (ctx: Zone_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_encoding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_encoding?: (ctx: Opt_encodingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.nonreservedword_or_sconst_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword_or_sconst_column?: (ctx: Nonreservedword_or_sconst_columnContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.nonreservedword_or_sconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword_or_sconst?: (ctx: Nonreservedword_or_sconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.variableresetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableresetstmt?: (ctx: VariableresetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reset_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReset_rest?: (ctx: Reset_restContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generic_reset`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_reset?: (ctx: Generic_resetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.setresetclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetresetclause?: (ctx: SetresetclauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.functionsetresetclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionsetresetclause?: (ctx: FunctionsetresetclauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.variableshowstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableshowstmt?: (ctx: VariableshowstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constraintssetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintssetstmt?: (ctx: ConstraintssetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constraints_set_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraints_set_list?: (ctx: Constraints_set_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constraints_set_mode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraints_set_mode?: (ctx: Constraints_set_modeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.checkpointstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCheckpointstmt?: (ctx: CheckpointstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.discardstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiscardstmt?: (ctx: DiscardstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altertablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertablestmt?: (ctx: AltertablestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_table_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_cmds?: (ctx: Alter_table_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partition_bound_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_spec?: (ctx: Partition_bound_specContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partition_bound_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_cluase?: (ctx: Partition_bound_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partition_bound_choose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_bound_choose?: (ctx: Partition_bound_chooseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partition_with_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_with_cluase?: (ctx: Partition_with_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partition_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartition_cmd?: (ctx: Partition_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_partition_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_partition_cmd?: (ctx: Index_partition_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_table_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_table_cmd?: (ctx: Alter_table_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_column_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_column_default?: (ctx: Alter_column_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_drop_behavior`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_drop_behavior?: (ctx: Opt_drop_behaviorContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_collate_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_collate_clause?: (ctx: Opt_collate_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_using?: (ctx: Alter_usingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.replica_identity`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplica_identity?: (ctx: Replica_identityContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reloptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloptions?: (ctx: ReloptionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_reloptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_reloptions?: (ctx: Opt_reloptionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reloption_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloption_list?: (ctx: Reloption_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reloption_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReloption_elem?: (ctx: Reloption_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_identity_column_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_identity_column_option_list?: (ctx: Alter_identity_column_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_identity_column_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_identity_column_option?: (ctx: Alter_identity_column_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partitionboundspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionboundspec?: (ctx: PartitionboundspecContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.hash_partbound_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partbound_elem?: (ctx: Hash_partbound_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.hash_partbound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHash_partbound?: (ctx: Hash_partboundContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altercompositetypestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltercompositetypestmt?: (ctx: AltercompositetypestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_type_cmds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type_cmds?: (ctx: Alter_type_cmdsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_type_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_type_cmd?: (ctx: Alter_type_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.closeportalstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCloseportalstmt?: (ctx: CloseportalstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopystmt?: (ctx: CopystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_from`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_from?: (ctx: Copy_fromContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_program?: (ctx: Opt_programContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_file_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_file_name?: (ctx: Copy_file_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_options?: (ctx: Copy_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_opt_list?: (ctx: Copy_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_opt_item?: (ctx: Copy_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_binary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_binary?: (ctx: Opt_binaryContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_delimiter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_delimiter?: (ctx: Copy_delimiterContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_using?: (ctx: Opt_usingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_generic_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_list?: (ctx: Copy_generic_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_generic_opt_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_elem?: (ctx: Copy_generic_opt_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_generic_opt_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_arg?: (ctx: Copy_generic_opt_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_generic_opt_arg_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_arg_list?: (ctx: Copy_generic_opt_arg_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.copy_generic_opt_arg_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCopy_generic_opt_arg_list_item?: (ctx: Copy_generic_opt_arg_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by the `columnCreateTable`
     * labeled alternative in `DuckDBParser.createstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnCreateTable?: (ctx: ColumnCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.pragma_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_name?: (ctx: Pragma_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.signed_number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSigned_number?: (ctx: Signed_numberContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.pragma_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragma_value?: (ctx: Pragma_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.pragmastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPragmastmt?: (ctx: PragmastmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttemp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttemp?: (ctx: OpttempContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.table_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_column_list?: (ctx: Table_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttableelementlist?: (ctx: OpttableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttypedtableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttypedtableelementlist?: (ctx: OpttypedtableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableelementlist?: (ctx: TableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.typedtableelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedtableelementlist?: (ctx: TypedtableelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tableelement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableelement?: (ctx: TableelementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.typedtableelement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedtableelement?: (ctx: TypedtableelementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_def`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_def?: (ctx: Column_defContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.compressionCluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompressionCluase?: (ctx: CompressionCluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.storageCluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStorageCluase?: (ctx: StorageCluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.columnOptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnOptions?: (ctx: ColumnOptionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.colquallist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColquallist?: (ctx: ColquallistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.colconstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColconstraint?: (ctx: ColconstraintContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.colconstraintelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColconstraintelem?: (ctx: ColconstraintelemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.nulls_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNulls_distinct?: (ctx: Nulls_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generated_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerated_when?: (ctx: Generated_whenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.deferrable_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeferrable_trigger?: (ctx: Deferrable_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.initially_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInitially_trigger?: (ctx: Initially_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablelikeclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablelikeclause?: (ctx: TablelikeclauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablelikeoptionlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablelikeoptionlist?: (ctx: TablelikeoptionlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablelikeoption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablelikeoption?: (ctx: TablelikeoptionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tableconstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableconstraint?: (ctx: TableconstraintContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constraintelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintelem?: (ctx: ConstraintelemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_no_inherit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_no_inherit?: (ctx: Opt_no_inheritContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_column_list?: (ctx: Opt_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_column_list_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_column_list_create?: (ctx: Opt_column_list_createContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_list?: (ctx: Column_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_list_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_list_create?: (ctx: Column_list_createContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_c_include`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_c_include?: (ctx: Opt_c_includeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.key_match`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_match?: (ctx: Key_matchContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exclusionconstraintlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionconstraintlist?: (ctx: ExclusionconstraintlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exclusionconstraintelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionconstraintelem?: (ctx: ExclusionconstraintelemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exclusionwhereclause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclusionwhereclause?: (ctx: ExclusionwhereclauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.key_actions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_actions?: (ctx: Key_actionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.key_update`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_update?: (ctx: Key_updateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.key_delete`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_delete?: (ctx: Key_deleteContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.key_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKey_action?: (ctx: Key_actionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optinherit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptinherit?: (ctx: OptinheritContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optpartitionspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptpartitionspec?: (ctx: OptpartitionspecContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.partitionspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionspec?: (ctx: PartitionspecContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.part_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPart_params?: (ctx: Part_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.part_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPart_elem?: (ctx: Part_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.table_access_method_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_access_method_clause?: (ctx: Table_access_method_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optwith`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptwith?: (ctx: OptwithContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.oncommitoption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOncommitoption?: (ctx: OncommitoptionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttablespace?: (ctx: OpttablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_paramenters_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_paramenters_create?: (ctx: Index_paramenters_createContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optconstablespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptconstablespace?: (ctx: OptconstablespaceContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.existingindex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExistingindex?: (ctx: ExistingindexContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createstatsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatestatsstmt?: (ctx: CreatestatsstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterstatsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterstatsstmt?: (ctx: AlterstatsstmtContext) => Result;
    /**
     * Visit a parse tree produced by the `queryCreateTable`
     * labeled alternative in `DuckDBParser.createasstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryCreateTable?: (ctx: QueryCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.create_as_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_as_target?: (ctx: Create_as_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_with_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with_data?: (ctx: Opt_with_dataContext) => Result;
    /**
     * Visit a parse tree produced by the `createMaterializedView`
     * labeled alternative in `DuckDBParser.creatematviewstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.create_mv_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_mv_target?: (ctx: Create_mv_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optnolog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptnolog?: (ctx: OptnologContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.refreshmatviewstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshmatviewstmt?: (ctx: RefreshmatviewstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createseqstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateseqstmt?: (ctx: CreateseqstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterseqstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterseqstmt?: (ctx: AlterseqstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optseqoptlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptseqoptlist?: (ctx: OptseqoptlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optparenthesizedseqoptlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptparenthesizedseqoptlist?: (ctx: OptparenthesizedseqoptlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.seqoptlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeqoptlist?: (ctx: SeqoptlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.seqoptelem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeqoptelem?: (ctx: SeqoptelemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_by?: (ctx: Opt_byContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.numericonly`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericonly?: (ctx: NumericonlyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.numericonly_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumericonly_list?: (ctx: Numericonly_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createplangstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateplangstmt?: (ctx: CreateplangstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_trusted`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_trusted?: (ctx: Opt_trustedContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.handler_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHandler_name?: (ctx: Handler_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_inline_handler`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_inline_handler?: (ctx: Opt_inline_handlerContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.validator_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValidator_clause?: (ctx: Validator_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_validator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_validator?: (ctx: Opt_validatorContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_procedural`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_procedural?: (ctx: Opt_proceduralContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createtablespacestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatetablespacestmt?: (ctx: CreatetablespacestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttablespaceowner`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttablespaceowner?: (ctx: OpttablespaceownerContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createextensionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateextensionstmt?: (ctx: CreateextensionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.create_extension_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_extension_opt_list?: (ctx: Create_extension_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.create_extension_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_extension_opt_item?: (ctx: Create_extension_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterextensionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterextensionstmt?: (ctx: AlterextensionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_extension_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_extension_opt_list?: (ctx: Alter_extension_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_extension_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_extension_opt_item?: (ctx: Alter_extension_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterextensioncontentsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterextensioncontentsstmt?: (ctx: AlterextensioncontentsstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createfdwstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefdwstmt?: (ctx: CreatefdwstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.fdw_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFdw_option?: (ctx: Fdw_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.fdw_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFdw_options?: (ctx: Fdw_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_fdw_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_fdw_options?: (ctx: Opt_fdw_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterfdwstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterfdwstmt?: (ctx: AlterfdwstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.create_generic_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreate_generic_options?: (ctx: Create_generic_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generic_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_list?: (ctx: Generic_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_generic_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_options?: (ctx: Alter_generic_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_generic_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_option_list?: (ctx: Alter_generic_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alter_generic_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter_generic_option_elem?: (ctx: Alter_generic_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generic_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_elem?: (ctx: Generic_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generic_option_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_name?: (ctx: Generic_option_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generic_option_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeneric_option_arg?: (ctx: Generic_option_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createforeignserverstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateforeignserverstmt?: (ctx: CreateforeignserverstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_type?: (ctx: Opt_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.foreign_server_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeign_server_version?: (ctx: Foreign_server_versionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_foreign_server_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_foreign_server_version?: (ctx: Opt_foreign_server_versionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterforeignserverstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterforeignserverstmt?: (ctx: AlterforeignserverstmtContext) => Result;
    /**
     * Visit a parse tree produced by the `createForeignTable`
     * labeled alternative in `DuckDBParser.createforeigntablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateForeignTable?: (ctx: CreateForeignTableContext) => Result;
    /**
     * Visit a parse tree produced by the `createPartitionForeignTable`
     * labeled alternative in `DuckDBParser.createforeigntablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatePartitionForeignTable?: (ctx: CreatePartitionForeignTableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.importforeignschemastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportforeignschemastmt?: (ctx: ImportforeignschemastmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.import_qualification_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImport_qualification_type?: (ctx: Import_qualification_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.import_qualification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImport_qualification?: (ctx: Import_qualificationContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createusermappingstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateusermappingstmt?: (ctx: CreateusermappingstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.auth_ident`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAuth_ident?: (ctx: Auth_identContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterusermappingstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterusermappingstmt?: (ctx: AlterusermappingstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createpolicystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatepolicystmt?: (ctx: CreatepolicystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterpolicystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterpolicystmt?: (ctx: AlterpolicystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterprocedurestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterprocedurestmt?: (ctx: AlterprocedurestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.procedure_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_cluase?: (ctx: Procedure_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.procedure_action`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_action?: (ctx: Procedure_actionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsecurityoptionalexpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecurityoptionalexpr?: (ctx: RowsecurityoptionalexprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsecurityoptionalwithcheck`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecurityoptionalwithcheck?: (ctx: RowsecurityoptionalwithcheckContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsecuritydefaulttorole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecuritydefaulttorole?: (ctx: RowsecuritydefaulttoroleContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsecurityoptionaltorole`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecurityoptionaltorole?: (ctx: RowsecurityoptionaltoroleContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsecuritydefaultpermissive`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecuritydefaultpermissive?: (ctx: RowsecuritydefaultpermissiveContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsecuritydefaultforcmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsecuritydefaultforcmd?: (ctx: RowsecuritydefaultforcmdContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.row_security_cmd`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow_security_cmd?: (ctx: Row_security_cmdContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createamstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateamstmt?: (ctx: CreateamstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.am_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAm_type?: (ctx: Am_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createtrigstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatetrigstmt?: (ctx: CreatetrigstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggeractiontime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggeractiontime?: (ctx: TriggeractiontimeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.foreachrow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeachrow?: (ctx: ForeachrowContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.roworstatment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoworstatment?: (ctx: RoworstatmentContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerevents`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerevents?: (ctx: TriggereventsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggeroneevent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggeroneevent?: (ctx: TriggeroneeventContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerreferencing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerreferencing?: (ctx: TriggerreferencingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggertransitions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggertransitions?: (ctx: TriggertransitionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggertransition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggertransition?: (ctx: TriggertransitionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transitionoldornew`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionoldornew?: (ctx: TransitionoldornewContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transitionrowortable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionrowortable?: (ctx: TransitionrowortableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transitionrelname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransitionrelname?: (ctx: TransitionrelnameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerforspec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerforspec?: (ctx: TriggerforspecContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerforopteach`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerforopteach?: (ctx: TriggerforopteachContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerfortype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerfortype?: (ctx: TriggerfortypeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerwhen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerwhen?: (ctx: TriggerwhenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.function_or_procedure`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_or_procedure?: (ctx: Function_or_procedureContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerfuncargs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerfuncargs?: (ctx: TriggerfuncargsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.triggerfuncarg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTriggerfuncarg?: (ctx: TriggerfuncargContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.optconstrfromtable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptconstrfromtable?: (ctx: OptconstrfromtableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constraintattributespec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintattributespec?: (ctx: ConstraintattributespecContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constraintattributeElem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintattributeElem?: (ctx: ConstraintattributeElemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createeventtrigstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateeventtrigstmt?: (ctx: CreateeventtrigstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.event_trigger_when_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_when_list?: (ctx: Event_trigger_when_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.event_trigger_when_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_when_item?: (ctx: Event_trigger_when_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.event_trigger_value_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent_trigger_value_list?: (ctx: Event_trigger_value_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altereventtrigstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltereventtrigstmt?: (ctx: AltereventtrigstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.enable_trigger`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnable_trigger?: (ctx: Enable_triggerContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createassertionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateassertionstmt?: (ctx: CreateassertionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.definestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinestmt?: (ctx: DefinestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefinition?: (ctx: DefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_list?: (ctx: Def_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.def_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_elem?: (ctx: Def_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.def_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDef_arg?: (ctx: Def_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.old_aggr_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggr_definition?: (ctx: Old_aggr_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.old_aggr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggr_list?: (ctx: Old_aggr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.old_aggr_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOld_aggr_elem?: (ctx: Old_aggr_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_enum_val_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_enum_val_list?: (ctx: Opt_enum_val_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.enum_val_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnum_val_list?: (ctx: Enum_val_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterenumstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterenumstmt?: (ctx: AlterenumstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_if_not_exists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_if_not_exists?: (ctx: Opt_if_not_existsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createopclassstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateopclassstmt?: (ctx: CreateopclassstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opclass_item_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_item_list?: (ctx: Opclass_item_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opclass_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_item?: (ctx: Opclass_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_default?: (ctx: Opt_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_opfamily`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_opfamily?: (ctx: Opt_opfamilyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opclass_purpose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_purpose?: (ctx: Opclass_purposeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_recheck`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_recheck?: (ctx: Opt_recheckContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createopfamilystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateopfamilystmt?: (ctx: CreateopfamilystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alteropfamilystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteropfamilystmt?: (ctx: AlteropfamilystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opclass_drop_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_drop_list?: (ctx: Opclass_drop_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opclass_drop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpclass_drop?: (ctx: Opclass_dropContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reassignownedstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReassignownedstmt?: (ctx: ReassignownedstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.dropstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropstmt?: (ctx: DropstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.view_nameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_nameList?: (ctx: View_nameListContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.object_type_any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_any_name?: (ctx: Object_type_any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.object_type_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_name?: (ctx: Object_type_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.object_type_name_on_any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_type_name_on_any_name?: (ctx: Object_type_name_on_any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.any_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name_list?: (ctx: Any_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.relation_column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_column_name?: (ctx: Relation_column_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.relation_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_name?: (ctx: Relation_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.any_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_name?: (ctx: Any_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.attrs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrs?: (ctx: AttrsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.type_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_name_list?: (ctx: Type_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.truncatestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncatestmt?: (ctx: TruncatestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.truncate_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncate_table?: (ctx: Truncate_tableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.commentstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentstmt?: (ctx: CommentstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.comment_text`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComment_text?: (ctx: Comment_textContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.seclabelstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeclabelstmt?: (ctx: SeclabelstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_provider`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_provider?: (ctx: Opt_providerContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.security_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSecurity_label?: (ctx: Security_labelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.fetchstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetchstmt?: (ctx: FetchstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.fetch_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_args?: (ctx: Fetch_argsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.from_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_in?: (ctx: From_inContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_from_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_from_in?: (ctx: Opt_from_inContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.grantstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantstmt?: (ctx: GrantstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.revokestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokestmt?: (ctx: RevokestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.privileges`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivileges?: (ctx: PrivilegesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.beforeprivilegeselectlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeforeprivilegeselectlist?: (ctx: BeforeprivilegeselectlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.beforeprivilegeselect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBeforeprivilegeselect?: (ctx: BeforeprivilegeselectContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.privilege_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege_list?: (ctx: Privilege_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.privilege`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege?: (ctx: PrivilegeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.privilege_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrivilege_target?: (ctx: Privilege_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.grantee_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee_list?: (ctx: Grantee_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.grantee`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantee?: (ctx: GranteeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_grant_grant_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_grant_grant_option?: (ctx: Opt_grant_grant_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.grantrolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrantrolestmt?: (ctx: GrantrolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.revokerolestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRevokerolestmt?: (ctx: RevokerolestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_grant_admin_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_grant_admin_option?: (ctx: Opt_grant_admin_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_granted_by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_granted_by?: (ctx: Opt_granted_byContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterdefaultprivilegesstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdefaultprivilegesstmt?: (ctx: AlterdefaultprivilegesstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.defacloptionlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacloptionlist?: (ctx: DefacloptionlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.defacloption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacloption?: (ctx: DefacloptionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.defaclaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaclaction?: (ctx: DefaclactionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.defacl_privilege_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefacl_privilege_target?: (ctx: Defacl_privilege_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.indexstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexstmt?: (ctx: IndexstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_unique`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_unique?: (ctx: Opt_uniqueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_concurrently`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_concurrently?: (ctx: Opt_concurrentlyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_index_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_index_name?: (ctx: Opt_index_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.access_method_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAccess_method_clause?: (ctx: Access_method_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_params?: (ctx: Index_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_elem_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_elem_options?: (ctx: Index_elem_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_elem?: (ctx: Index_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_include`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_include?: (ctx: Opt_includeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_including_params`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_including_params?: (ctx: Index_including_paramsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_collate?: (ctx: Opt_collateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_class`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_class?: (ctx: Opt_classContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_asc_desc`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_asc_desc?: (ctx: Opt_asc_descContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_nulls_order`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_nulls_order?: (ctx: Opt_nulls_orderContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createfunctionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefunctionstmt?: (ctx: CreatefunctionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.attrilist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrilist?: (ctx: AttrilistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_or_replace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_or_replace?: (ctx: Opt_or_replaceContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args?: (ctx: Func_argsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_args_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_list?: (ctx: Func_args_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.routine_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_with_argtypes_list?: (ctx: Routine_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.routine_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutine_with_argtypes?: (ctx: Routine_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.procedure_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_with_argtypes_list?: (ctx: Procedure_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.procedure_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_with_argtypes?: (ctx: Procedure_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.function_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_with_argtypes_list?: (ctx: Function_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.function_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_with_argtypes?: (ctx: Function_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_args_with_defaults`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_with_defaults?: (ctx: Func_args_with_defaultsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_args_with_defaults_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_args_with_defaults_list?: (ctx: Func_args_with_defaults_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg?: (ctx: Func_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.arg_class`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArg_class?: (ctx: Arg_classContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.param_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam_name?: (ctx: Param_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_return`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_return?: (ctx: Func_returnContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_type?: (ctx: Func_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_arg_with_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_with_default?: (ctx: Func_arg_with_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.aggr_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggr_arg?: (ctx: Aggr_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.aggr_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggr_args?: (ctx: Aggr_argsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.aggr_args_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggr_args_list?: (ctx: Aggr_args_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.aggregate_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_with_argtypes?: (ctx: Aggregate_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.aggregate_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregate_with_argtypes_list?: (ctx: Aggregate_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createfunc_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefunc_opt_list?: (ctx: Createfunc_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.common_func_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_func_opt_item?: (ctx: Common_func_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createfunc_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatefunc_opt_item?: (ctx: Createfunc_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transform_type_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform_type_list?: (ctx: Transform_type_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_definition?: (ctx: Opt_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.table_func_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_func_column?: (ctx: Table_func_columnContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.table_func_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_func_column_list?: (ctx: Table_func_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterfunctionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterfunctionstmt?: (ctx: AlterfunctionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterFunctionTypeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFunctionTypeClause?: (ctx: AlterFunctionTypeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterfunc_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterfunc_opt_list?: (ctx: Alterfunc_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_restrict`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_restrict?: (ctx: Opt_restrictContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.removefuncstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemovefuncstmt?: (ctx: RemovefuncstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.removeaggrstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveaggrstmt?: (ctx: RemoveaggrstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.removeoperstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRemoveoperstmt?: (ctx: RemoveoperstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.oper_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOper_argtypes?: (ctx: Oper_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.any_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_operator?: (ctx: Any_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.operator_with_argtypes_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_with_argtypes_list?: (ctx: Operator_with_argtypes_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.operator_with_argtypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_with_argtypes?: (ctx: Operator_with_argtypesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.dostmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDostmt?: (ctx: DostmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.dostmt_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDostmt_opt_list?: (ctx: Dostmt_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.dostmt_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDostmt_opt_item?: (ctx: Dostmt_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createcaststmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatecaststmt?: (ctx: CreatecaststmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cast_context`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast_context?: (ctx: Cast_contextContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_if_exists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_if_exists?: (ctx: Opt_if_existsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createtransformstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatetransformstmt?: (ctx: CreatetransformstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transform_element_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransform_element_list?: (ctx: Transform_element_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reindexstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindexstmt?: (ctx: ReindexstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reindex_target_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_target_type?: (ctx: Reindex_target_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reindex_target_multitable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_target_multitable?: (ctx: Reindex_target_multitableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reindex_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_option_list?: (ctx: Reindex_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reindex_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReindex_option_elem?: (ctx: Reindex_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altertblspcstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertblspcstmt?: (ctx: AltertblspcstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.renamestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenamestmt?: (ctx: RenamestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_set_data`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_set_data?: (ctx: Opt_set_dataContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterobjectdependsstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterobjectdependsstmt?: (ctx: AlterobjectdependsstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_no`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_no?: (ctx: Opt_noContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterobjectschemastmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterobjectschemastmt?: (ctx: AlterobjectschemastmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alteroperatorstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlteroperatorstmt?: (ctx: AlteroperatorstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.operator_def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_list?: (ctx: Operator_def_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.operator_def_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_elem?: (ctx: Operator_def_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.operator_def_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperator_def_arg?: (ctx: Operator_def_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altertypestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertypestmt?: (ctx: AltertypestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterownerstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterownerstmt?: (ctx: AlterownerstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createpublicationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatepublicationstmt?: (ctx: CreatepublicationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_publication_for_tables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_publication_for_tables?: (ctx: Opt_publication_for_tablesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.publication_for_tables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_for_tables?: (ctx: Publication_for_tablesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterpublicationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterpublicationstmt?: (ctx: AlterpublicationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createsubscriptionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatesubscriptionstmt?: (ctx: CreatesubscriptionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.publication_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_name_list?: (ctx: Publication_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.publication_name_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_name_item?: (ctx: Publication_name_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altersubscriptionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltersubscriptionstmt?: (ctx: AltersubscriptionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rulestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRulestmt?: (ctx: RulestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.ruleactionlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionlist?: (ctx: RuleactionlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.ruleactionmulti`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionmulti?: (ctx: RuleactionmultiContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.ruleactionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionstmt?: (ctx: RuleactionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.ruleactionstmtOrEmpty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRuleactionstmtOrEmpty?: (ctx: RuleactionstmtOrEmptyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.event`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEvent?: (ctx: EventContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_instead`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_instead?: (ctx: Opt_insteadContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.notifystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotifystmt?: (ctx: NotifystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.notify_payload`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotify_payload?: (ctx: Notify_payloadContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.listenstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitListenstmt?: (ctx: ListenstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.unlistenstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnlistenstmt?: (ctx: UnlistenstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transactionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransactionstmt?: (ctx: TransactionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_transaction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_transaction?: (ctx: Opt_transactionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transaction_mode_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_item?: (ctx: Transaction_mode_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transaction_mode_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_list?: (ctx: Transaction_mode_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.transaction_mode_list_or_empty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransaction_mode_list_or_empty?: (ctx: Transaction_mode_list_or_emptyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_transaction_chain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_transaction_chain?: (ctx: Opt_transaction_chainContext) => Result;
    /**
     * Visit a parse tree produced by the `createView`
     * labeled alternative in `DuckDBParser.viewstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_check_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_check_option?: (ctx: Opt_check_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.loadstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadstmt?: (ctx: LoadstmtContext) => Result;
    /**
     * Visit a parse tree produced by the `createDatabase`
     * labeled alternative in `DuckDBParser.createdbstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createdb_opt_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_list?: (ctx: Createdb_opt_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createdb_opt_items`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_items?: (ctx: Createdb_opt_itemsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createdb_opt_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_item?: (ctx: Createdb_opt_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createdb_opt_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedb_opt_name?: (ctx: Createdb_opt_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_equal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_equal?: (ctx: Opt_equalContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterdatabasestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdatabasestmt?: (ctx: AlterdatabasestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterdatabasesetstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdatabasesetstmt?: (ctx: AlterdatabasesetstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.drop_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_option_list?: (ctx: Drop_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.drop_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDrop_option?: (ctx: Drop_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altercollationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltercollationstmt?: (ctx: AltercollationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altersystemstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltersystemstmt?: (ctx: AltersystemstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createdomainstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedomainstmt?: (ctx: CreatedomainstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alterdomainstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterdomainstmt?: (ctx: AlterdomainstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_as`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_as?: (ctx: Opt_asContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altertsdictionarystmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertsdictionarystmt?: (ctx: AltertsdictionarystmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.altertsconfigurationstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAltertsconfigurationstmt?: (ctx: AltertsconfigurationstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.any_with`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_with?: (ctx: Any_withContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.createconversionstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateconversionstmt?: (ctx: CreateconversionstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.clusterstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusterstmt?: (ctx: ClusterstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_verbose_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_verbose_list?: (ctx: Opt_verbose_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cluster_index_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCluster_index_specification?: (ctx: Cluster_index_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vacuumstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuumstmt?: (ctx: VacuumstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.analyzestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzestmt?: (ctx: AnalyzestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vac_analyze_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_list?: (ctx: Vac_analyze_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.analyze_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_keyword?: (ctx: Analyze_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vac_analyze_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_elem?: (ctx: Vac_analyze_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vac_analyze_option_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_name?: (ctx: Vac_analyze_option_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vac_analyze_option_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVac_analyze_option_arg?: (ctx: Vac_analyze_option_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_analyze`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_analyze?: (ctx: Opt_analyzeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.analyze_options_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_options_list?: (ctx: Analyze_options_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.analyze_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyze_option_elem?: (ctx: Analyze_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_verbose`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_verbose?: (ctx: Opt_verboseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_skiplock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_skiplock?: (ctx: Opt_skiplockContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_buffer_usage_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_buffer_usage_limit?: (ctx: Opt_buffer_usage_limitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_full`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_full?: (ctx: Opt_fullContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_freeze`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_freeze?: (ctx: Opt_freezeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_name_list?: (ctx: Opt_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vacuum_relation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_relation?: (ctx: Vacuum_relationContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.vacuum_relation_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVacuum_relation_list?: (ctx: Vacuum_relation_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_vacuum_relation_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_vacuum_relation_list?: (ctx: Opt_vacuum_relation_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explainstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainstmt?: (ctx: ExplainstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explainablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainablestmt?: (ctx: ExplainablestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explain_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_list?: (ctx: Explain_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explain_option_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_elem?: (ctx: Explain_option_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explain_option_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_name?: (ctx: Explain_option_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explain_option_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplain_option_arg?: (ctx: Explain_option_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.preparestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreparestmt?: (ctx: PreparestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.prep_type_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrep_type_clause?: (ctx: Prep_type_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.preparablestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPreparablestmt?: (ctx: PreparablestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.executestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecutestmt?: (ctx: ExecutestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.execute_param_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExecute_param_clause?: (ctx: Execute_param_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.deallocatestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeallocatestmt?: (ctx: DeallocatestmtContext) => Result;
    /**
     * Visit a parse tree produced by the `insertStatement`
     * labeled alternative in `DuckDBParser.insertstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.insert_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_target?: (ctx: Insert_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.insert_rest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_rest?: (ctx: Insert_restContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.override_kind`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverride_kind?: (ctx: Override_kindContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.insert_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_column_list?: (ctx: Insert_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.insert_column_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsert_column_item?: (ctx: Insert_column_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_on_conflict`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_on_conflict?: (ctx: Opt_on_conflictContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_conf_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_conf_expr?: (ctx: Opt_conf_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.returning_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturning_clause?: (ctx: Returning_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.deletestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeletestmt?: (ctx: DeletestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_clause?: (ctx: Using_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.lockstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLockstmt?: (ctx: LockstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_lock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_lock?: (ctx: Opt_lockContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.lock_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLock_type?: (ctx: Lock_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_nowait`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_nowait?: (ctx: Opt_nowaitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_nowait_or_skip`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_nowait_or_skip?: (ctx: Opt_nowait_or_skipContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.updatestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdatestmt?: (ctx: UpdatestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_clause_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_clause_list?: (ctx: Set_clause_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_clause?: (ctx: Set_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_target?: (ctx: Set_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_target_list?: (ctx: Set_target_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.declarecursorstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDeclarecursorstmt?: (ctx: DeclarecursorstmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cursor_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_name?: (ctx: Cursor_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cursor_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_options?: (ctx: Cursor_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_hold`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_hold?: (ctx: Opt_holdContext) => Result;
    /**
     * Visit a parse tree produced by the `selectStatement`
     * labeled alternative in `DuckDBParser.selectstmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatement?: (ctx: SelectStatementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_with_parens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_with_parens?: (ctx: Select_with_parensContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_no_parens`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_no_parens?: (ctx: Select_no_parensContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_clause?: (ctx: Select_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.simple_select`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_select?: (ctx: Simple_selectContext) => Result;
    /**
     * Visit a parse tree produced by the `union`
     * labeled alternative in `DuckDBParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnion?: (ctx: UnionContext) => Result;
    /**
     * Visit a parse tree produced by the `intersect`
     * labeled alternative in `DuckDBParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntersect?: (ctx: IntersectContext) => Result;
    /**
     * Visit a parse tree produced by the `except`
     * labeled alternative in `DuckDBParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExcept?: (ctx: ExceptContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.set_operator_with_all_or_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_operator_with_all_or_distinct?: (ctx: Set_operator_with_all_or_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause?: (ctx: With_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cte_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCte_list?: (ctx: Cte_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.common_table_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommon_table_expr?: (ctx: Common_table_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.search_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearch_cluase?: (ctx: Search_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cycle_cluase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCycle_cluase?: (ctx: Cycle_cluaseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_materialized`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_materialized?: (ctx: Opt_materializedContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_with_clause?: (ctx: Opt_with_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.into_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_clause?: (ctx: Into_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_strict`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_strict?: (ctx: Opt_strictContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttempTableName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttempTableName?: (ctx: OpttempTableNameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_table?: (ctx: Opt_tableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.all_or_distinct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_or_distinct?: (ctx: All_or_distinctContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.distinct_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistinct_clause?: (ctx: Distinct_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_all_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_all_clause?: (ctx: Opt_all_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_sort_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_sort_clause?: (ctx: Opt_sort_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sort_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSort_clause?: (ctx: Sort_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sortby_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortby_list?: (ctx: Sortby_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sortby`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortby?: (ctx: SortbyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_limit?: (ctx: Select_limitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_select_limit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_select_limit?: (ctx: Opt_select_limitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.limit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimit_clause?: (ctx: Limit_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.fetch_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFetch_clause?: (ctx: Fetch_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.offset_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset_clause?: (ctx: Offset_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_limit_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_limit_value?: (ctx: Select_limit_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_offset_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_offset_value?: (ctx: Select_offset_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.select_fetch_first_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_fetch_first_value?: (ctx: Select_fetch_first_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.i_or_f_const`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitI_or_f_const?: (ctx: I_or_f_constContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.row_or_rows`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow_or_rows?: (ctx: Row_or_rowsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.first_or_next`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirst_or_next?: (ctx: First_or_nextContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_clause?: (ctx: Group_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.group_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_list?: (ctx: Group_by_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.group_by_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_item?: (ctx: Group_by_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.empty_grouping_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmpty_grouping_set?: (ctx: Empty_grouping_setContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rollup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRollup_clause?: (ctx: Rollup_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cube_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCube_clause?: (ctx: Cube_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.grouping_sets_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping_sets_clause?: (ctx: Grouping_sets_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.having_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHaving_clause?: (ctx: Having_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.for_locking_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_clause?: (ctx: For_locking_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_for_locking_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_for_locking_clause?: (ctx: Opt_for_locking_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.for_locking_items`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_items?: (ctx: For_locking_itemsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.for_locking_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_item?: (ctx: For_locking_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.for_locking_strength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_locking_strength?: (ctx: For_locking_strengthContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.locked_rels_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocked_rels_list?: (ctx: Locked_rels_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.values_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues_clause?: (ctx: Values_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.from_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_clause?: (ctx: From_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.from_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_list?: (ctx: From_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.table_ref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_ref?: (ctx: Table_refContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias_clause?: (ctx: Alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_alias_clause?: (ctx: Opt_alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_alias_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_alias_clause?: (ctx: Func_alias_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.join_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_type?: (ctx: Join_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.join_qual`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_qual?: (ctx: Join_qualContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr?: (ctx: Relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.view_relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitView_relation_expr?: (ctx: View_relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.publication_relation_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_relation_expr?: (ctx: Publication_relation_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.relation_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr_list?: (ctx: Relation_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.publication_relation_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPublication_relation_expr_list?: (ctx: Publication_relation_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.relation_expr_opt_alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRelation_expr_opt_alias?: (ctx: Relation_expr_opt_aliasContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablesample_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablesample_clause?: (ctx: Tablesample_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_repeatable_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_repeatable_clause?: (ctx: Opt_repeatable_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_table?: (ctx: Func_tableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsfrom_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsfrom_item?: (ctx: Rowsfrom_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rowsfrom_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowsfrom_list?: (ctx: Rowsfrom_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_col_def_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_col_def_list?: (ctx: Opt_col_def_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_ordinality`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_ordinality?: (ctx: Opt_ordinalityContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.where_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_clause?: (ctx: Where_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.where_or_current_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_or_current_clause?: (ctx: Where_or_current_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opttablefuncelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpttablefuncelementlist?: (ctx: OpttablefuncelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablefuncelementlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablefuncelementlist?: (ctx: TablefuncelementlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablefuncelement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablefuncelement?: (ctx: TablefuncelementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xmltable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable?: (ctx: XmltableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xmltable_column_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_list?: (ctx: Xmltable_column_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xmltable_column_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_el?: (ctx: Xmltable_column_elContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xmltable_column_option_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_option_list?: (ctx: Xmltable_column_option_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xmltable_column_option_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmltable_column_option_el?: (ctx: Xmltable_column_option_elContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_namespace_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespace_list?: (ctx: Xml_namespace_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_namespace_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_namespace_el?: (ctx: Xml_namespace_elContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.typename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypename?: (ctx: TypenameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_array_bounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_array_bounds?: (ctx: Opt_array_boundsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.simpletypename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpletypename?: (ctx: SimpletypenameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.consttypename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConsttypename?: (ctx: ConsttypenameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.generictype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenerictype?: (ctx: GenerictypeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_type_modifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_type_modifiers?: (ctx: Opt_type_modifiersContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.numeric`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumeric?: (ctx: NumericContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_float`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_float?: (ctx: Opt_floatContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.bit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBit?: (ctx: BitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constbit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstbit?: (ctx: ConstbitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.bitwithlength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitwithlength?: (ctx: BitwithlengthContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.bitwithoutlength`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBitwithoutlength?: (ctx: BitwithoutlengthContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.character`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacter?: (ctx: CharacterContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constcharacter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstcharacter?: (ctx: ConstcharacterContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.character_c`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharacter_c?: (ctx: Character_cContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_varying`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_varying?: (ctx: Opt_varyingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constdatetime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstdatetime?: (ctx: ConstdatetimeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.constinterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstinterval?: (ctx: ConstintervalContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_timezone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_timezone?: (ctx: Opt_timezoneContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_interval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_interval?: (ctx: Opt_intervalContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.interval_second`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterval_second?: (ctx: Interval_secondContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_escape`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_escape?: (ctx: Opt_escapeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr?: (ctx: A_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_qual`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_qual?: (ctx: A_expr_qualContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_lessless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_lessless?: (ctx: A_expr_lesslessContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_or`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_or?: (ctx: A_expr_orContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_and`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_and?: (ctx: A_expr_andContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_in`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_in?: (ctx: A_expr_inContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_unary_not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_unary_not?: (ctx: A_expr_unary_notContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_isnull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_isnull?: (ctx: A_expr_isnullContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_is_not`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_is_not?: (ctx: A_expr_is_notContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_compare`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_compare?: (ctx: A_expr_compareContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_like`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_like?: (ctx: A_expr_likeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_qual_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_qual_op?: (ctx: A_expr_qual_opContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_unary_qualop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_unary_qualop?: (ctx: A_expr_unary_qualopContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_add`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_add?: (ctx: A_expr_addContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_mul`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_mul?: (ctx: A_expr_mulContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_caret`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_caret?: (ctx: A_expr_caretContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_unary_sign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_unary_sign?: (ctx: A_expr_unary_signContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_at_time_zone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_at_time_zone?: (ctx: A_expr_at_time_zoneContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_collate?: (ctx: A_expr_collateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.a_expr_typecast`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitA_expr_typecast?: (ctx: A_expr_typecastContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.b_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitB_expr?: (ctx: B_exprContext) => Result;
    /**
     * Visit a parse tree produced by the `c_expr_exists`
     * labeled alternative in `DuckDBParser.c_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_expr_exists?: (ctx: C_expr_existsContext) => Result;
    /**
     * Visit a parse tree produced by the `c_expr_expr`
     * labeled alternative in `DuckDBParser.c_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_expr_expr?: (ctx: C_expr_exprContext) => Result;
    /**
     * Visit a parse tree produced by the `c_expr_case`
     * labeled alternative in `DuckDBParser.c_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitC_expr_case?: (ctx: C_expr_caseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.plsqlvariablename`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlvariablename?: (ctx: PlsqlvariablenameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_application`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_application?: (ctx: Func_applicationContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr?: (ctx: Func_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_expr_windowless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr_windowless?: (ctx: Func_expr_windowlessContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_expr_common_subexpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_expr_common_subexpr?: (ctx: Func_expr_common_subexprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_root_version`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_root_version?: (ctx: Xml_root_versionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_xml_root_standalone`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_xml_root_standalone?: (ctx: Opt_xml_root_standaloneContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_attributes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attributes?: (ctx: Xml_attributesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_attribute_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attribute_list?: (ctx: Xml_attribute_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_attribute_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_attribute_el?: (ctx: Xml_attribute_elContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.document_or_content`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocument_or_content?: (ctx: Document_or_contentContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_whitespace_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_whitespace_option?: (ctx: Xml_whitespace_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xmlexists_argument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXmlexists_argument?: (ctx: Xmlexists_argumentContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xml_passing_mech`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXml_passing_mech?: (ctx: Xml_passing_mechContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.within_group_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithin_group_clause?: (ctx: Within_group_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.filter_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_clause?: (ctx: Filter_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.window_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_clause?: (ctx: Window_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.window_definition_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_definition_list?: (ctx: Window_definition_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.window_definition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_definition?: (ctx: Window_definitionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.over_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOver_clause?: (ctx: Over_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.window_specification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindow_specification?: (ctx: Window_specificationContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_existing_window_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_existing_window_name?: (ctx: Opt_existing_window_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_partition_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_partition_clause?: (ctx: Opt_partition_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_frame_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_frame_clause?: (ctx: Opt_frame_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.frame_extent`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_extent?: (ctx: Frame_extentContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.frame_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrame_bound?: (ctx: Frame_boundContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_window_exclusion_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_window_exclusion_clause?: (ctx: Opt_window_exclusion_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRow?: (ctx: RowContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.explicit_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicit_row?: (ctx: Explicit_rowContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.implicit_row`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplicit_row?: (ctx: Implicit_rowContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sub_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSub_type?: (ctx: Sub_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.all_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAll_op?: (ctx: All_opContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.mathop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMathop?: (ctx: MathopContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.qual_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQual_op?: (ctx: Qual_opContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.qual_all_op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQual_all_op?: (ctx: Qual_all_opContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.subquery_Op`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_Op?: (ctx: Subquery_OpContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_list?: (ctx: Expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_expr_list_noparen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_list_noparen?: (ctx: Column_expr_list_noparenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_list?: (ctx: Column_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr?: (ctx: Column_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.column_expr_noparen`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumn_expr_noparen?: (ctx: Column_expr_noparenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_arg_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_list?: (ctx: Func_arg_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.func_arg_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunc_arg_expr?: (ctx: Func_arg_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.type_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_list?: (ctx: Type_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.array_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray_expr?: (ctx: Array_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.array_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArray_expr_list?: (ctx: Array_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.extract_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract_list?: (ctx: Extract_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.extract_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExtract_arg?: (ctx: Extract_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.unicode_normal_form`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnicode_normal_form?: (ctx: Unicode_normal_formContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.overlay_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverlay_list?: (ctx: Overlay_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.position_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition_list?: (ctx: Position_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.substr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubstr_list?: (ctx: Substr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.trim_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrim_list?: (ctx: Trim_listContext) => Result;
    /**
     * Visit a parse tree produced by the `in_expr_select`
     * labeled alternative in `DuckDBParser.in_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIn_expr_select?: (ctx: In_expr_selectContext) => Result;
    /**
     * Visit a parse tree produced by the `in_expr_list`
     * labeled alternative in `DuckDBParser.in_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIn_expr_list?: (ctx: In_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.case_expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_expr?: (ctx: Case_exprContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.when_clause_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhen_clause_list?: (ctx: When_clause_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhen_clause?: (ctx: When_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.case_default`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_default?: (ctx: Case_defaultContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.case_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_arg?: (ctx: Case_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.columnref`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnref?: (ctx: ColumnrefContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.indirection_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection_el?: (ctx: Indirection_elContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_slice_bound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_slice_bound?: (ctx: Opt_slice_boundContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndirection?: (ctx: IndirectionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_indirection`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_indirection?: (ctx: Opt_indirectionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_target_list?: (ctx: Opt_target_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.target_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_list?: (ctx: Target_listContext) => Result;
    /**
     * Visit a parse tree produced by the `target_label`
     * labeled alternative in `DuckDBParser.target_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_label?: (ctx: Target_labelContext) => Result;
    /**
     * Visit a parse tree produced by the `target_star`
     * labeled alternative in `DuckDBParser.target_el`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTarget_star?: (ctx: Target_starContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.qualified_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_name_list?: (ctx: Qualified_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.table_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable_name_list?: (ctx: Table_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.schema_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchema_name_list?: (ctx: Schema_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.database_nameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabase_nameList?: (ctx: Database_nameListContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.procedure_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedure_name_list?: (ctx: Procedure_name_listContext) => Result;
    /**
     * Visit a parse tree produced by the `tablespaceNameCreate`
     * labeled alternative in `DuckDBParser.tablespace_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceNameCreate?: (ctx: TablespaceNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `tablespaceName`
     * labeled alternative in `DuckDBParser.tablespace_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespaceName?: (ctx: TablespaceNameContext) => Result;
    /**
     * Visit a parse tree produced by the `tableNameCreate`
     * labeled alternative in `DuckDBParser.table_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableNameCreate?: (ctx: TableNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `tableName`
     * labeled alternative in `DuckDBParser.table_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableName?: (ctx: TableNameContext) => Result;
    /**
     * Visit a parse tree produced by the `viewNameCreate`
     * labeled alternative in `DuckDBParser.view_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewNameCreate?: (ctx: ViewNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `viewName`
     * labeled alternative in `DuckDBParser.view_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewName?: (ctx: ViewNameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.qualified_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualified_name?: (ctx: Qualified_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.tablespace_name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablespace_name_list?: (ctx: Tablespace_name_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.name_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName_list?: (ctx: Name_listContext) => Result;
    /**
     * Visit a parse tree produced by the `databaseNameCreate`
     * labeled alternative in `DuckDBParser.database_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseNameCreate?: (ctx: DatabaseNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `databaseName`
     * labeled alternative in `DuckDBParser.database_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabaseName?: (ctx: DatabaseNameContext) => Result;
    /**
     * Visit a parse tree produced by the `schemaName`
     * labeled alternative in `DuckDBParser.schema_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSchemaName?: (ctx: SchemaNameContext) => Result;
    /**
     * Visit a parse tree produced by the `routineNameCreate`
     * labeled alternative in `DuckDBParser.routine_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineNameCreate?: (ctx: RoutineNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `routineName`
     * labeled alternative in `DuckDBParser.routine_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoutineName?: (ctx: RoutineNameContext) => Result;
    /**
     * Visit a parse tree produced by the `procedureName`
     * labeled alternative in `DuckDBParser.procedure_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureName?: (ctx: ProcedureNameContext) => Result;
    /**
     * Visit a parse tree produced by the `procedureNameCreate`
     * labeled alternative in `DuckDBParser.procedure_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProcedureNameCreate?: (ctx: ProcedureNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `columnName`
     * labeled alternative in `DuckDBParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by the `columnNameMatch`
     * labeled alternative in `DuckDBParser.column_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameMatch?: (ctx: ColumnNameMatchContext) => Result;
    /**
     * Visit a parse tree produced by the `columnNameCreate`
     * labeled alternative in `DuckDBParser.column_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameCreate?: (ctx: ColumnNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName?: (ctx: NameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.attr_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttr_name?: (ctx: Attr_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.file_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFile_name?: (ctx: File_nameContext) => Result;
    /**
     * Visit a parse tree produced by the `functionNameCreate`
     * labeled alternative in `DuckDBParser.function_name_create`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionNameCreate?: (ctx: FunctionNameCreateContext) => Result;
    /**
     * Visit a parse tree produced by the `functionName`
     * labeled alternative in `DuckDBParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.usual_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsual_name?: (ctx: Usual_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.aexprconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAexprconst?: (ctx: AexprconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.xconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitXconst?: (ctx: XconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.bconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBconst?: (ctx: BconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.fconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFconst?: (ctx: FconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.iconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIconst?: (ctx: IconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSconst?: (ctx: SconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.anysconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnysconst?: (ctx: AnysconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_uescape`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_uescape?: (ctx: Opt_uescapeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.signediconst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSignediconst?: (ctx: SignediconstContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.groupname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupname?: (ctx: GroupnameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.roleid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRoleid?: (ctx: RoleidContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.rolespec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRolespec?: (ctx: RolespecContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.role_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRole_list?: (ctx: Role_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.colid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColid?: (ctx: ColidContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_method_choices`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_method_choices?: (ctx: Index_method_choicesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exclude_element`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExclude_element?: (ctx: Exclude_elementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.index_paramenters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndex_paramenters?: (ctx: Index_paramentersContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.type_function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_function_name?: (ctx: Type_function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.type_usual_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_usual_name?: (ctx: Type_usual_nameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.nonreservedword_column`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword_column?: (ctx: Nonreservedword_columnContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.nonreservedword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonreservedword?: (ctx: NonreservedwordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.collabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCollabel?: (ctx: CollabelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.plsqlidentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsqlidentifier?: (ctx: PlsqlidentifierContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.unreserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnreserved_keyword?: (ctx: Unreserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.col_name_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCol_name_keyword?: (ctx: Col_name_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.type_func_name_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_func_name_keyword?: (ctx: Type_func_name_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.reserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReserved_keyword?: (ctx: Reserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.pl_function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPl_function?: (ctx: Pl_functionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.comp_options`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComp_options?: (ctx: Comp_optionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.comp_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComp_option?: (ctx: Comp_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sharp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSharp?: (ctx: SharpContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.option_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOption_value?: (ctx: Option_valueContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_semi?: (ctx: Opt_semiContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.pl_block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPl_block?: (ctx: Pl_blockContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_sect?: (ctx: Decl_sectContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_start`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_start?: (ctx: Decl_startContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_stmts`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_stmts?: (ctx: Decl_stmtsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.label_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabel_decl?: (ctx: Label_declContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_stmt?: (ctx: Decl_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_statement?: (ctx: Decl_statementContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_scrollable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_scrollable?: (ctx: Opt_scrollableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_cursor_query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_query?: (ctx: Decl_cursor_queryContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_cursor_args`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_args?: (ctx: Decl_cursor_argsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_cursor_arglist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_arglist?: (ctx: Decl_cursor_arglistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_cursor_arg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_cursor_arg?: (ctx: Decl_cursor_argContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_is_for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_is_for?: (ctx: Decl_is_forContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_aliasitem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_aliasitem?: (ctx: Decl_aliasitemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_varname`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_varname?: (ctx: Decl_varnameContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_const`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_const?: (ctx: Decl_constContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_datatype`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_datatype?: (ctx: Decl_datatypeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_collate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_collate?: (ctx: Decl_collateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_notnull`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_notnull?: (ctx: Decl_notnullContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_defval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_defval?: (ctx: Decl_defvalContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.decl_defkey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecl_defkey?: (ctx: Decl_defkeyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.assign_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_operator?: (ctx: Assign_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.proc_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_sect?: (ctx: Proc_sectContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.proc_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_stmt?: (ctx: Proc_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_perform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_perform?: (ctx: Stmt_performContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_call?: (ctx: Stmt_callContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_expr_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_expr_list?: (ctx: Opt_expr_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_assign`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_assign?: (ctx: Stmt_assignContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_getdiag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_getdiag?: (ctx: Stmt_getdiagContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.getdiag_area_opt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_area_opt?: (ctx: Getdiag_area_optContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.getdiag_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_list?: (ctx: Getdiag_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.getdiag_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_list_item?: (ctx: Getdiag_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.getdiag_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_item?: (ctx: Getdiag_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.getdiag_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGetdiag_target?: (ctx: Getdiag_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.assign_var`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_var?: (ctx: Assign_varContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_if`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_if?: (ctx: Stmt_ifContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_elsifs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_elsifs?: (ctx: Stmt_elsifsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_else?: (ctx: Stmt_elseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_case`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_case?: (ctx: Stmt_caseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_expr_until_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_expr_until_when?: (ctx: Opt_expr_until_whenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.case_when_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_when_list?: (ctx: Case_when_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.case_when`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCase_when?: (ctx: Case_whenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_case_else`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_case_else?: (ctx: Opt_case_elseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_loop?: (ctx: Stmt_loopContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_while`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_while?: (ctx: Stmt_whileContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_for`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_for?: (ctx: Stmt_forContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.for_control`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_control?: (ctx: For_controlContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_for_using_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_for_using_expression?: (ctx: Opt_for_using_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_cursor_parameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_cursor_parameters?: (ctx: Opt_cursor_parametersContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_reverse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_reverse?: (ctx: Opt_reverseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_by_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_by_expression?: (ctx: Opt_by_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.for_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_variable?: (ctx: For_variableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_foreach_a`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_foreach_a?: (ctx: Stmt_foreach_aContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.foreach_slice`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForeach_slice?: (ctx: Foreach_sliceContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_exit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_exit?: (ctx: Stmt_exitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exit_type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExit_type?: (ctx: Exit_typeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_return`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_return?: (ctx: Stmt_returnContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_return_result`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_return_result?: (ctx: Opt_return_resultContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_raise`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_raise?: (ctx: Stmt_raiseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_stmt_raise_level`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_stmt_raise_level?: (ctx: Opt_stmt_raise_levelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_raise_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_list?: (ctx: Opt_raise_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_raise_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using?: (ctx: Opt_raise_usingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_raise_using_elem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using_elem?: (ctx: Opt_raise_using_elemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_raise_using_elem_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_raise_using_elem_list?: (ctx: Opt_raise_using_elem_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_assert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_assert?: (ctx: Stmt_assertContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_stmt_assert_message`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_stmt_assert_message?: (ctx: Opt_stmt_assert_messageContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.loop_body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoop_body?: (ctx: Loop_bodyContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_execsql`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_execsql?: (ctx: Stmt_execsqlContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_dynexecute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_dynexecute?: (ctx: Stmt_dynexecuteContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_execute_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_using?: (ctx: Opt_execute_usingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_execute_using_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_using_list?: (ctx: Opt_execute_using_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_execute_into`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_execute_into?: (ctx: Opt_execute_intoContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_open`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_open?: (ctx: Stmt_openContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_open_bound_list_item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_bound_list_item?: (ctx: Opt_open_bound_list_itemContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_open_bound_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_bound_list?: (ctx: Opt_open_bound_listContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_open_using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_open_using?: (ctx: Opt_open_usingContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_scroll_option`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_scroll_option?: (ctx: Opt_scroll_optionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_scroll_option_no`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_scroll_option_no?: (ctx: Opt_scroll_option_noContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_fetch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_fetch?: (ctx: Stmt_fetchContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.into_target`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInto_target?: (ctx: Into_targetContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_cursor_from`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_cursor_from?: (ctx: Opt_cursor_fromContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_fetch_direction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_fetch_direction?: (ctx: Opt_fetch_directionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_move`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_move?: (ctx: Stmt_moveContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.mergestmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMergestmt?: (ctx: MergestmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.data_source`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_source?: (ctx: Data_sourceContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.join_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoin_condition?: (ctx: Join_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.merge_when_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_when_clause?: (ctx: Merge_when_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.merge_insert`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_insert?: (ctx: Merge_insertContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.merge_update`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMerge_update?: (ctx: Merge_updateContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.default_values_or_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefault_values_or_values?: (ctx: Default_values_or_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exprofdefaultlist`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprofdefaultlist?: (ctx: ExprofdefaultlistContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exprofdefault`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprofdefault?: (ctx: ExprofdefaultContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_close`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_close?: (ctx: Stmt_closeContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_null`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_null?: (ctx: Stmt_nullContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_commit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_commit?: (ctx: Stmt_commitContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_rollback`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_rollback?: (ctx: Stmt_rollbackContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.plsql_opt_transaction_chain`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsql_opt_transaction_chain?: (ctx: Plsql_opt_transaction_chainContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.stmt_set`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt_set?: (ctx: Stmt_setContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.cursor_variable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCursor_variable?: (ctx: Cursor_variableContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.exception_sect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitException_sect?: (ctx: Exception_sectContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.proc_exceptions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_exceptions?: (ctx: Proc_exceptionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.proc_exception`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_exception?: (ctx: Proc_exceptionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.proc_conditions`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_conditions?: (ctx: Proc_conditionsContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.proc_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProc_condition?: (ctx: Proc_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_block_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_block_label?: (ctx: Opt_block_labelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_loop_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_loop_label?: (ctx: Opt_loop_labelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_label`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_label?: (ctx: Opt_labelContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_exitcond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_exitcond?: (ctx: Opt_exitcondContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.any_identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAny_identifier?: (ctx: Any_identifierContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.plsql_unreserved_keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlsql_unreserved_keyword?: (ctx: Plsql_unreserved_keywordContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.sql_expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSql_expression?: (ctx: Sql_expressionContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.expr_until_then`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_then?: (ctx: Expr_until_thenContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.expr_until_semi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_semi?: (ctx: Expr_until_semiContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.expr_until_rightbracket`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_rightbracket?: (ctx: Expr_until_rightbracketContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.expr_until_loop`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_until_loop?: (ctx: Expr_until_loopContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.make_execsql_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMake_execsql_stmt?: (ctx: Make_execsql_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `DuckDBParser.opt_returning_clause_into`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOpt_returning_clause_into?: (ctx: Opt_returning_clause_intoContext) => Result;
}
