variable "aws_region" {
  description = "AWS region used by the application."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Short project identifier."
  type        = string
  default     = "vbtrees"
}

variable "environment" {
  description = "Deployment environment."
  type        = string
  default     = "prod"
}