variable "aws_region" {
  description = "AWS region used by the project."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Short project identifier."
  type        = string
  default     = "vbtrees"
}

variable "github_owner" {
  description = "GitHub repository owner."
  type        = string
  default     = "saivaish96"
}

variable "github_repository" {
  description = "GitHub repository name."
  type        = string
  default     = "VBTrees-ReactNative"
}

variable "create_github_oidc_provider" {
  description = "Whether Terraform should create the account-level GitHub OIDC provider."
  type        = bool
  default     = true
}

variable "existing_github_oidc_provider_arn" {
  description = "Existing GitHub OIDC provider ARN when creation is disabled."
  type        = string
  default     = ""
}