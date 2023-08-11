export interface ITask {
    "id": number,
    "create_time": string,
    "update_time": string,
    "task_id": string,
    "task_name": string,
    "tool_name": string,
    "type": string,
    "status": number,
    "error": string,
    "end_time": string,
    "result_data": {},
    "possible_errors": string,
    "desc": string,
    "run_parms": {
        public_args: any,
        tool_args: any
    },
    "run_cmd": string,
    "result_dir": string,
    "start_time": string,
    "submitter": number,
    "tool": number
}