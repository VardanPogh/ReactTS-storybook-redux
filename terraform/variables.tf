variable "aws_region" {
  default = "ap-southeast-2"
}

variable "buckets_names" {
  description = "Create S3 buckets with these names"
  type        = list(string)
  default     = ["batnav-ui", "batnav-storybook"]
}
